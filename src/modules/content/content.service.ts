import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import Logger from 'src/utils/logger';

import {
  GetCategorySubjectDTO,
  GetLPDTO,
} from 'src/modules/content/dto/content.dto';
import { contentMessages } from 'src/utils/messages';
import { Response } from '../../utils/response';
import { TblSubjects } from 'src/models/entities/TblSubjects';
import { TblCourses } from 'src/models/entities/TblCourses';
@Injectable()
export class ContentService {
  constructor(
    @InjectRepository(TblSubjects) private subjectRepo: Repository<TblSubjects>,
    @InjectRepository(TblCourses) private coursesRepo: Repository<TblCourses>,
  ) {}

  async getLearningPackages(getLPDTO: GetLPDTO): Promise<Response> {
    try {
      const { id } = getLPDTO;
      const foundPackages = await this.coursesRepo
        .createQueryBuilder('course')
        .leftJoin('course.class_standard', 'class_standard')
        .where(id ? 'course.id = :id' : '1=1', {
          id,
        })
        .select([
          'course.id',
          'course.priority',
          'course.name',
          'class_standard.id',
          'class_standard.name',
        ])
        .orderBy('course.priority', 'ASC')
        .getMany();

      return new Response({
        data: { packages: foundPackages },
        message: contentMessages.coursesFetched,
      });
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException(e.message);
    }
  }

  async getCategorySubject(
    user_id: string,
    getCategorySubjectDTO: GetCategorySubjectDTO,
  ): Promise<Response> {
    const { packageId } = getCategorySubjectDTO;
    try {
      const packageIds = packageId.map((id) => id);

      const subjects = await this.subjectRepo
        .createQueryBuilder('subject')
        .leftJoin('subject.class_standard', 'class_standard')
        .leftJoin('subject.chapters', 'chapter')
        .leftJoin('chapter.topics', 'lesson')
        // .leftJoin('lesson.materials', 'material')
        .select([
          'subject.id ',
          'subject.name',
          //'subject.mediaPath as "mediaPath"',
          'class_standard.id',
          'class_standard.name',
          'COUNT(chapter.id) as "chapterCount"',
          'COUNT(lesson.id) as "lessonCount"',
        ])
        .where('class_standard.id IN (:...packageIds)', { packageIds })
        .groupBy(
          'subject.id, subject.name,  class_standard.name, class_standard.id',
        ) //subject.mediaPath,
        .getRawMany();

      // for (const subject of subjects) {
      //   if (subject && subject.mediaPath) {
      //     subject.mediaPath = await this.utilsService.createSignedURL(
      //       subject.mediaPath,
      //     );
      //   }

      //   const chapters = await this.chapterRepo.find({
      //     where: {
      //       subject: { id: subject.subjectId },
      //     },
      //   });

      //   let totalDuration = 0;
      //   let totalCompletion = 0;

      //   for (const chapter of chapters) {
      //     const lessons = await this.lessonRepo.find({
      //       where: {
      //         chapter: { id: chapter.id },
      //       },
      //     });

      //     for (const lesson of lessons) {
      //       const materials = await this.materialRepo.findOne({
      //         where: { lesson: { id: lesson.id } },
      //       });

      //       totalDuration += materials ? materials.duration : 0;

      //       const learningJourney = await this.learningJourneyRepo.findOne({
      //         where: {
      //           lesson: { id: lesson.id },
      //           chapter: { id: chapter.id },
      //           subject: { id: subject.subjectId },
      //         },
      //       });

      //       totalCompletion += learningJourney
      //         ? learningJourney.videoCompletion
      //         : 0;
      //     }
      //   }

      //   subject['completionInPercentage'] =
      //     totalCompletion !== 0 ? (totalCompletion / totalDuration) * 100 : 0;
      // }

      // const packageNames = subjects.reduce((result, subject) => {
      //   const existingItem = result.find(
      //     (item) => item.learningPackageName === subject.learningPackageName,
      //   );

      //   if (existingItem) {
      //     existingItem.subjects.push(subject);
      //   } else {
      //     result.push({
      //       learningPackageName: subject.learningPackageName,
      //       subjects: [subject],
      //     });
      //   }

      //   return result;
      // }, []);

      return new Response({
        data: { subjects },
        message: contentMessages.subjectFetchSuccess,
      });
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException(e.message);
    }
  }

  // async getChapterLesson(
  //   user_id: string,
  //   getChapterLessonDTO: GetChapterLessonDTO,
  // ): Promise<Response> {
  //   const { subjectId } = getChapterLessonDTO;
  //   try {
  //     const chapters = await this.subjectRepo
  //       .createQueryBuilder('subject')
  //       .where('subject.id = :subjectId', { subjectId })
  //       .select([
  //         'subject.id as "subjectId"',
  //         'subject.title as "subjectName"',
  //         'subject.mediaPath as "subjectMedia"',
  //         'chapters.id as "chapterId"',
  //         'chapters.title as "chapterTitle"',
  //         'chapters.mediaPath as "chapterMedia"',
  //       ])
  //       .addSelect((subQuery) => {
  //         return subQuery
  //           .select('COUNT(lesson.id)', 'lessonCount')
  //           .from('lessons', 'lesson')
  //           .where('lesson.chapterId = chapters.id');
  //       }, 'lessonCount')
  //       .leftJoin('subject.chapters', 'chapters')
  //       .groupBy('subject.id, chapters.id')
  //       .getRawMany();
  //     let totalDuration = 0,
  //       totalCompletion = 0;
  //     for (let index = 0; index < chapters.length; index++) {
  //       const element = chapters[index];
  //       const lessons = await this.lessonRepo.find({
  //         where: {
  //           chapter: {
  //             id: element.chapterId,
  //           },
  //         },
  //       });
  //       for (let index = 0; index < lessons.length; index++) {
  //         const lesson = lessons[index];
  //         const materials = await this.materialRepo.findOne({
  //           where: {
  //             lesson: {
  //               id: lesson.id,
  //             },
  //           },
  //         });
  //         totalDuration += materials ? materials.duration : 0;
  //         const learningJourney = await this.learningJourneyRepo.findOne({
  //           where: {
  //             lesson: {
  //               id: lesson.id,
  //             },
  //             chapter: {
  //               id: element.chapterId,
  //             },
  //             subject: {
  //               id: subjectId,
  //             },
  //           },
  //         });
  //         totalCompletion =
  //           totalCompletion +
  //           (learningJourney ? learningJourney.videoCompletion : 0);
  //         element['completionInPercentage'] =
  //           totalCompletion !== 0 ? (totalCompletion / totalDuration) * 100 : 0;
  //       }
  //       if (element.subjectMedia) {
  //         chapters[index].subjectMedia =
  //           await this.utilsService.createSignedURL(element.subjectMedia);
  //       }
  //       if (element.chapterMedia) {
  //         chapters[index].chapterMedia =
  //           await this.utilsService.createSignedURL(element.chapterMedia);
  //       }
  //       const completionInPercentage = (totalCompletion / totalDuration) * 100;
  //       //element['progress'] = '0/' + element.lessonCount;
  //       totalCompletion = 0;
  //       totalDuration = 0;
  //     }

  //     return new Response({
  //       data: { chapters },
  //       message: contentMessages.chaptersFetchSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async getLessonByChapter(
  //   user_id: string,
  //   getLessonByChapterDTO: GetLessonByChapterDTO,
  // ): Promise<Response> {
  //   const { chapterId } = getLessonByChapterDTO;
  //   try {
  //     let totalDuration = 0,
  //       isAutoPlay = false,
  //       totalCompletion = 0;
  //     const user = await this.userRepo.findOne({
  //       where: {
  //         id: user_id,
  //       },
  //       relations: ['student'],
  //     });
  //     if (!user) {
  //       throw new BadRequestException(contentErrors.failedToFetchUser);
  //     }
  //     if (user.isAutoPlay == true) isAutoPlay = true;
  //     const lessons = await this.chapterRepo.findOne({
  //       where: {
  //         id: chapterId,
  //         lessons: {
  //           materials: {
  //             type: MaterialTypes.VIDEO,
  //           },
  //         },
  //       },
  //       relations: ['lessons', 'lessons.materials'],
  //       select: {
  //         id: true,
  //         title: true,
  //         mediaPath: true,
  //         lessons: {
  //           id: true,
  //           title: true,
  //           mediaPath: true,
  //           materials: {
  //             duration: true,
  //           },
  //         },
  //       },
  //     });
  //     if (!lessons) {
  //       throw new BadRequestException(contentErrors.failedToFetchLesson);
  //     }
  //     if (lessons && lessons.mediaPath) {
  //       lessons.mediaPath = await this.utilsService.createSignedURL(
  //         lessons.mediaPath,
  //       );
  //     }
  //     for (let index = 0; index < lessons.lessons.length; index++) {
  //       const element = lessons.lessons[index];
  //       if (element.mediaPath) {
  //         element.mediaPath = await this.utilsService.createSignedURL(
  //           element.mediaPath,
  //         );
  //       }
  //       element.materials[0]['videoDuration'] = (
  //         await this.secondsToHMS(element.materials[0].duration)
  //       ).time;
  //       totalDuration += element.materials[0].duration;
  //       const journey = await this.learningJourneyRepo.findOne({
  //         where: {
  //           student: {
  //             id: user.student.id,
  //           },
  //           chapter: {
  //             id: chapterId,
  //           },
  //           lesson: {
  //             id: element.id,
  //           },
  //         },
  //         order: {
  //           createdAt: 'DESC',
  //         },
  //       });
  //       const favoriteLesson = await this.favouriteLessonRepo.findOne({
  //         where: {
  //           lesson: {
  //             id: element.id,
  //           },
  //           student: {
  //             id: user.student.id,
  //           },
  //         },
  //       });
  //       element['isFavorite'] = favoriteLesson
  //         ? favoriteLesson.isFavourite
  //         : false;
  //       if (!journey) {
  //         element['completionInSec'] = 0;
  //         element['completion'] = 0;
  //         isAutoPlay = false;
  //         totalCompletion = 0;
  //       } else {
  //         element['completionInSec'] = journey.videoCompletion;
  //         element['completion'] = (
  //           await this.secondsToHMS(journey.videoCompletion)
  //         ).time;
  //         totalCompletion += journey.videoCompletion;
  //       }
  //     }
  //     lessons['totalCompletion'] = totalCompletion;
  //     lessons['totalDuration'] = totalDuration;
  //     lessons['totalScore'] = 100;
  //     // lessons['achieveScore'] = Math.round(
  //     //   (100 / (totalDuration % 3600) / 60) * ((totalCompletion % 3600) / 60),
  //     // );
  //     lessons['achieveScore'] = Math.round(
  //       (100 / totalDuration) * totalCompletion,
  //     );
  //     lessons['isAutoPlay'] = isAutoPlay;
  //     return new Response({
  //       data: { lessons },
  //       message: contentMessages.lessonsFetchSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async addLearningJourney(
  //   user_id: string,
  //   addLearningJourneyDTO: AddLearningJourneyDTO,
  // ): Promise<Response> {
  //   const { chapterId, lessonId, completion, isAutoPlay } =
  //     addLearningJourneyDTO;
  //   try {
  //     let favourite;
  //     const user = await this.userRepo.findOne({
  //       where: {
  //         id: user_id,
  //       },
  //       relations: ['student'],
  //     });
  //     if (!user) {
  //       throw new BadRequestException(contentErrors.failedToFetchUser);
  //     }

  //     const material = await this.materialRepo.findOne({
  //       where: {
  //         lesson: {
  //           id: lessonId,
  //         },
  //       },
  //     });
  //     if (!material) {
  //       throw new BadRequestException(contentErrors.failedToFetchMaterial);
  //     }
  //     const subject = await this.subjectRepo.findOne({
  //       where: {
  //         chapters: {
  //           id: chapterId,
  //           lessons: {
  //             id: lessonId,
  //           },
  //         },
  //       },
  //       relations: ['chapters', 'chapters.lessons'],
  //     });
  //     if (!subject) {
  //       throw new BadRequestException(contentErrors.failedToFetchsubject);
  //     }
  //     await this.userRepo.save({
  //       id: user_id,
  //       isAutoPlay: isAutoPlay ? isAutoPlay : false,
  //     });
  //     let journey = await this.learningJourneyRepo.findOne({
  //       where: {
  //         student: {
  //           id: user.student.id,
  //         },
  //         subject: {
  //           id: subject.id,
  //         },
  //         chapter: {
  //           id: chapterId,
  //         },
  //         lesson: {
  //           id: lessonId,
  //         },
  //       },
  //     });
  //     if (journey) {
  //       journey = await this.learningJourneyRepo.save({
  //         id: journey.id,
  //         subject: {
  //           id: subject.id,
  //         },
  //         chapter: {
  //           id: chapterId,
  //         },
  //         lesson: {
  //           id: lessonId,
  //         },
  //         student: {
  //           id: user.student.id,
  //         },
  //         videoCompletion: completion,
  //       });
  //     } else {
  //       journey = await this.learningJourneyRepo.save({
  //         subject: {
  //           id: subject.id,
  //         },
  //         chapter: {
  //           id: chapterId,
  //         },
  //         lesson: {
  //           id: lessonId,
  //         },
  //         student: {
  //           id: user.student.id,
  //         },
  //         videoCompletion: completion,
  //       });
  //     }

  //     // const favoriteLesson = await this.favouriteLessonRepo.findOne({
  //     //   where: {
  //     //     lesson: {
  //     //       id: lessonId,
  //     //     },
  //     //     student: {
  //     //       id: user.student.id,
  //     //     },
  //     //   },
  //     // });
  //     // if (favoriteLesson) {
  //     //   favourite = await this.favouriteLessonRepo.save({
  //     //     id: favoriteLesson.id,
  //     //     isFavourite: isFavorite ? isFavorite : false,
  //     //     lesson: {
  //     //       id: lessonId,
  //     //     },
  //     //     student: {
  //     //       id: user.student.id,
  //     //     },
  //     //   });
  //     // } else {
  //     //   favourite = await this.favouriteLessonRepo.save({
  //     //     isFavourite: isFavorite ? isFavorite : false,
  //     //     lesson: {
  //     //       id: lessonId,
  //     //     },
  //     //     student: {
  //     //       id: user.student.id,
  //     //     },
  //     //   });
  //     // }

  //     return new Response({
  //       data: { journey, favourite },
  //       message: contentMessages.lessonsFetchSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async addFavoriteVideo(
  //   user_id: string,
  //   addFavoriteVideoDTO: AddFavoriteVideoDTO,
  // ): Promise<Response> {
  //   const { lessonId, isFavorite } = addFavoriteVideoDTO;
  //   try {
  //     let favourite;
  //     const user = await this.userRepo.findOne({
  //       where: {
  //         id: user_id,
  //       },
  //       relations: ['student'],
  //     });
  //     if (!user) {
  //       throw new BadRequestException(contentErrors.failedToFetchUser);
  //     }
  //     const favoriteLesson = await this.favouriteLessonRepo.findOne({
  //       where: {
  //         lesson: {
  //           id: lessonId,
  //         },
  //         student: {
  //           id: user.student.id,
  //         },
  //       },
  //     });
  //     if (favoriteLesson) {
  //       favourite = await this.favouriteLessonRepo.save({
  //         id: favoriteLesson.id,
  //         isFavourite: isFavorite ? isFavorite : false,
  //         lesson: {
  //           id: lessonId,
  //         },
  //         student: {
  //           id: user.student.id,
  //         },
  //       });
  //     } else {
  //       favourite = await this.favouriteLessonRepo.save({
  //         isFavourite: isFavorite ? isFavorite : false,
  //         lesson: {
  //           id: lessonId,
  //         },
  //         student: {
  //           id: user.student.id,
  //         },
  //       });
  //     }

  //     return new Response({
  //       data: { favourite },
  //       message: contentMessages.addFavoriteVideoSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async getVideoByLesson(
  //   user_id: string,
  //   getVideoByLessonDTO: GetVideoByLessonDTO,
  // ): Promise<Response> {
  //   const { lessonId } = getVideoByLessonDTO;
  //   try {
  //     const user = await this.userRepo.findOne({
  //       where: {
  //         id: user_id,
  //       },
  //       relations: ['student'],
  //     });
  //     if (!user) {
  //       throw new BadRequestException(contentErrors.failedToFetchUser);
  //     }
  //     const lessons = await this.lessonRepo.findOne({
  //       where: {
  //         id: lessonId,
  //         materials: {
  //           type: MaterialTypes.VIDEO,
  //         },
  //       },
  //       relations: ['materials'],
  //       select: {
  //         id: true,
  //         title: true,
  //         mediaPath: true,
  //         materials: {
  //           id: true,
  //           url: true,
  //           content: true,
  //           title: true,
  //           cover: true,
  //           thumbNail: true,
  //           type: true,
  //         },
  //       },
  //     });
  //     if (lessons.mediaPath) {
  //       lessons.mediaPath = await this.utilsService.createSignedURL(
  //         lessons.mediaPath,
  //       );
  //     }
  //     for (let index = 0; index < lessons.materials.length; index++) {
  //       const element = lessons.materials[index];
  //       if (element.url) {
  //         element.url = await this.utilsService.createSignedURL(element.url);
  //       }
  //       if (element.thumbNail) {
  //         element.thumbNail = await this.utilsService.createSignedURL(
  //           element.thumbNail,
  //         );
  //       }
  //     }

  //     const learningJourney = await this.learningJourneyRepo.find({
  //       where: {
  //         lesson: {
  //           id: lessonId,
  //         },
  //       },
  //       order: {
  //         createdAt: 'DESC',
  //       },
  //       select: {
  //         id: true,
  //         videoCompletion: true,
  //         createdAt: true,
  //       },
  //       take: 1,
  //     });
  //     lessons['completion'] =
  //       learningJourney.length === 0
  //         ? 0
  //         : (await this.secondsToHMS(learningJourney[0].videoCompletion)).time;
  //     lessons['isAutoPlay'] = user.isAutoPlay;
  //     const favourite = await this.favouriteLessonRepo.findOne({
  //       where: {
  //         lesson: {
  //           id: lessonId,
  //         },
  //         student: {
  //           id: user.student.id,
  //         },
  //       },
  //     });
  //     lessons['isFavorite'] = !favourite ? false : favourite.isFavourite;

  //     return new Response({
  //       data: { lessons },
  //       message: contentMessages.lessonsFetchSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async setAutoPlay(
  //   user_id: string,
  //   setAutoPlayDTO: SetAutoPlayDTO,
  // ): Promise<Response> {
  //   const { isAutoPlay } = setAutoPlayDTO;
  //   try {
  //     const user = await this.userRepo.findOne({
  //       where: {
  //         id: user_id,
  //       },
  //       relations: ['student'],
  //     });
  //     if (!user) {
  //       throw new BadRequestException(contentErrors.failedToFetchUser);
  //     }
  //     const autoPlay = await this.userRepo.save({
  //       id: user_id,
  //       isAutoPlay: isAutoPlay ? isAutoPlay : false,
  //     });
  //     return new Response({
  //       data: { autoPlay },
  //       message: contentMessages.lessonsFetchSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async getTests(getTestsDTO: GetTestsDTO): Promise<Response> {
  //   const { testId } = getTestsDTO;
  //   try {
  //     const foundTest = await this.testRepo.find({
  //       where: { id: testId ? testId : null },
  //       relations: ['lesson', 'question'],
  //       select: {
  //         id: true,
  //         topic: true,
  //         lesson: {
  //           id: true,
  //           title: true,
  //         },
  //         question: {
  //           id: true,
  //           question: true,
  //           option_a: true,
  //           option_b: true,
  //           option_c: true,
  //           option_d: true,
  //           correct_answer: true,
  //         },
  //       },
  //     });
  //     if (!foundTest) {
  //       throw new BadRequestException(adminErrors.testNotFound);
  //     }
  //     return new Response({
  //       data: { foundTest },
  //       message: contentMessages.testFetchSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async getTestByLesson(
  //   getTestByLessonDTO: GetTestByLessonDTO,
  // ): Promise<Response> {
  //   const { lessonId } = getTestByLessonDTO;
  //   try {
  //     const foundTest = await this.testRepo.findOne({
  //       where: {
  //         lesson: {
  //           id: lessonId,
  //         },
  //       },
  //       relations: ['lesson', 'question'],
  //       select: {
  //         id: true,
  //         topic: true,
  //         lesson: {
  //           id: true,
  //           title: true,
  //         },
  //         question: {
  //           id: true,
  //           question: true,
  //           option_a: true,
  //           option_b: true,
  //           option_c: true,
  //           option_d: true,
  //           correct_answer: true,
  //           questionImage: true,
  //           solution: true,
  //           solutionImage: true,
  //           hint: true,
  //           hintImage: true,
  //         },
  //       },
  //     });
  //     let questions = [];
  //     for (let index = 0; index < foundTest.question.length; index++) {
  //       const element = foundTest.question[index];
  //       if (element.questionImage) {
  //         element.questionImage = await this.utilsService.createSignedURL(
  //           element.questionImage,
  //         );
  //       }
  //       if (element.solutionImage) {
  //         element.solutionImage = await this.utilsService.createSignedURL(
  //           element.solutionImage,
  //         );
  //       }
  //       if (element.hintImage) {
  //         element.hintImage = await this.utilsService.createSignedURL(
  //           element.hintImage,
  //         );
  //       }
  //       questions.push(
  //         { option: 'option_a', value: element.option_a },
  //         { option: 'option_b', value: element.option_b },
  //         { option: 'option_c', value: element.option_c },
  //         { option: 'option_d', value: element.option_d },
  //       );
  //       element['questions'] = questions;
  //       delete element.option_a;
  //       delete element.option_b;
  //       delete element.option_c;
  //       delete element.option_d;
  //       questions = [];
  //     }
  //     if (!foundTest) {
  //       throw new BadRequestException(adminErrors.testNotFound);
  //     }
  //     return new Response({
  //       data: { foundTest },
  //       message: contentMessages.testFetchSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async getChapters(getChaptersDTO: GetChaptersDTO): Promise<Response> {
  //   try {
  //     const { packageId } = getChaptersDTO;
  //     let foundChapters = await this.chapterRepo
  //       .createQueryBuilder('chapter')
  //       .leftJoin('chapter.subject', 'subject')
  //       .leftJoin('subject.learningPackage', 'learningPackage');
  //     if (packageId) {
  //       foundChapters = foundChapters.where('learningPackage.id = :packageId', {
  //         packageId,
  //       });
  //     }
  //     const chapters = await foundChapters.getRawMany();
  //     return new Response({
  //       data: { chapters },
  //       message: contentMessages.chaptersFetchSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async getLessons(getLessonsDTO: GetLessonsDTO): Promise<Response> {
  //   try {
  //     const { chapterId } = getLessonsDTO;
  //     let foundLessons = await this.lessonRepo
  //       .createQueryBuilder('lesson')
  //       .leftJoin('lesson.chapter', 'chapter')
  //       .select(['lesson.id', 'lesson.title', 'lesson.mediaPath']);
  //     if (chapterId) {
  //       foundLessons = foundLessons.where('chapter.id = :chapterId', {
  //         chapterId,
  //       });
  //     }
  //     const lessons = await foundLessons.getRawMany();
  //     for (let index = 0; index < lessons.length; index++) {
  //       const element = lessons[index];
  //       if (element.lesson_mediaPath) {
  //         element.lesson_mediaPath = await this.utilsService.createSignedURL(
  //           element.lesson_mediaPath,
  //         );
  //       }
  //     }
  //     return new Response({
  //       data: { lessons },
  //       message: contentMessages.lessonsFetchSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async getReportCard(getReportCardofStudent: getReportCardofStudent) {
  //   const { studentId } = getReportCardofStudent;
  //   let foundReportCards, foundBadges, foundFavouriteLesson;
  //   try {
  //     foundReportCards = await this.reportCardRepo.findOne({
  //       where: { student: { id: studentId } },
  //       relations: ['student', 'test', 'test.question', 'test.testResult'],
  //     });
  //     //'Test.question', 'TestQuestions', 'Test.testResult', 'TestResult
  //     foundBadges = await this.userService.getBadgesOfStudent(
  //       getReportCardofStudent,
  //     );

  //     foundFavouriteLesson =
  //       await this.dashboardService.getFavouriteLessonOfStudent(
  //         getReportCardofStudent,
  //       );
  //   } catch (exp) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_IMPLEMENTED,
  //         error: contentErrors.failedToFetchReportCard + exp,
  //       },
  //       HttpStatus.NOT_IMPLEMENTED,
  //     );
  //   }
  //   return {
  //     success: true,
  //     foundReportCards,
  //     foundBadges,
  //     foundFavouriteLesson,
  //   };
  // }

  // async updateLeaderboardProfile(
  //   id: string,
  //   updateLeaderboardReq: updateLeaderboardReq,
  // ) {
  //   const { points } = updateLeaderboardReq;
  //   let foundLeaderboard, updatedLeaderboard: Leaderboard;

  //   try {
  //     foundLeaderboard = await this.leaderboardRepo.findOne({
  //       where: { id },
  //     });
  //   } catch (exp) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_IMPLEMENTED,
  //         error: contentErrors.checkingLeaderboard + exp,
  //       },
  //       HttpStatus.NOT_IMPLEMENTED,
  //     );
  //   }

  //   if (!foundLeaderboard) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_IMPLEMENTED,
  //         error: contentErrors.leaderboardNotFound,
  //       },
  //       HttpStatus.NOT_IMPLEMENTED,
  //     );
  //   }

  //   try {
  //     updatedLeaderboard = await this.leaderboardRepo.save({
  //       ...foundLeaderboard,
  //       points: points ?? foundLeaderboard.points,
  //     });

  //     return {
  //       success: true,
  //       updatedLeaderboard,
  //     };
  //   } catch (e) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_IMPLEMENTED,
  //         error: contentErrors.updatingLeaderboard,
  //       },
  //       HttpStatus.NOT_IMPLEMENTED,
  //     );
  //   }
  // }

  // async getLeaderboard(
  //   id: string,
  //   options: IPaginationOptions,
  // ): Promise<Pagination<Leaderboard>> {
  //   let foundLeaderboards;

  //   //:
  //   // try {
  //   //   foundLeaderboards =
  //   //     id == undefined
  //   //       ? await this.leaderboardRepo.createQueryBuilder('Leaderboard')
  //   //       : await this.badgeRepo
  //   //           .createQueryBuilder('Leaderboard')
  //   //           .where('Leaderboard.id = :id', { id });
  //   // } catch (exp) {
  //   //   throw new HttpException(
  //   //     {
  //   //       status: HttpStatus.NOT_IMPLEMENTED,
  //   //       error: contentErrors.failedToFetchLeaderboard + exp,
  //   //     },
  //   //     HttpStatus.NOT_IMPLEMENTED,
  //   //   );
  //   // }

  //   return paginate<Leaderboard>(foundLeaderboards, options);
  // }

  // async getMockTests(user_id: string): Promise<Response> {
  //   try {
  //     const user = await this.userRepo.findOne({
  //       where: {
  //         id: user_id,
  //       },
  //       relations: ['student'],
  //     });
  //     if (!user) {
  //       throw new BadRequestException(contentErrors.failedToFetchUser);
  //     }
  //     const foundSubscription = await this.userSubscriptionRepo.find({
  //       where: {
  //         user: {
  //           id: user_id,
  //         },
  //       },
  //       relations: ['subscription'],
  //     });
  //     if (foundSubscription.length == 0) {
  //       throw new BadRequestException(contentErrors.failedToFetchSubscription);
  //     }
  //     const foundMockTests = await this.mockTestRepo
  //       .createQueryBuilder('MockTest')
  //       .getMany();
  //     // if (id) {
  //     //   foundMockTests = foundMockTests.where('id = :id', {
  //     //     id,
  //     //   });
  //     // }
  //     return new Response({
  //       data: { foundMockTests, foundSubscription },
  //       message: contentMessages.lessonsFetchSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async getMockTestBySubject(
  //   user_id: string,
  //   subjectId: string,
  // ): Promise<Response> {
  //   try {
  //     const user = await this.userRepo.findOne({
  //       where: {
  //         id: user_id,
  //       },
  //       relations: ['student'],
  //     });
  //     if (!user) {
  //       throw new BadRequestException(contentErrors.failedToFetchUser);
  //     }
  //     const data = await this.mockTestRepo
  //       .createQueryBuilder('MockTest')
  //       .where('MockTest.subjectId = :subjectId', { subjectId })
  //       .getMany();
  //     //data = await this.mockTestRepo.findOneBy({ id });
  //     return new Response({
  //       data: { data },
  //       message: contentMessages.lessonsFetchSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async getMockTestQuestions(
  //   user_id: string,
  //   mockTestId: string,
  // ): Promise<Response> {
  //   try {
  //     const user = await this.userRepo.findOne({
  //       where: {
  //         id: user_id,
  //       },
  //       relations: ['student'],
  //     });
  //     if (!user) {
  //       throw new BadRequestException(contentErrors.failedToFetchUser);
  //     }
  //     const mockTestResult = await this.mockTestResultRepo.findOne({
  //       where: {
  //         student: {
  //           id: user.student.id,
  //         },
  //         mockTest: {
  //           id: mockTestId,
  //         },
  //       },
  //       order: {
  //         id: 'DESC',
  //       },
  //     });
  //     const totalQuestions = mockTestResult.totalQuestions;
  //     const data = await this.mockTestQuestionsRepo
  //       .createQueryBuilder('MockTestQuestions')
  //       .leftJoin('MockTestQuestions.mockTest', 'mockTest')
  //       .select([
  //         'MockTestQuestions.id',
  //         'MockTestQuestions.question',
  //         'MockTestQuestions.option_a',
  //         'MockTestQuestions.option_b',
  //         'MockTestQuestions.option_c',
  //         'MockTestQuestions.option_d',
  //         'MockTestQuestions.correct_answer',
  //       ])
  //       .where('mockTest.id = :mockTestId', { mockTestId })
  //       .orderBy('RANDOM()')
  //       .limit(totalQuestions)
  //       .getMany();

  //     return new Response({
  //       data: { data },
  //       message: contentMessages.mockTestFetchSuccess,
  //     });
  //   } catch (e) {
  //     Logger.error(e);
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async updateMockTest(id: string, updateMockTestReq: updateMockTestReq) {
  //   const { name, subject } = updateMockTestReq;

  //   let foundMockTest, updatedMockTest: MockTest;

  //   try {
  //     foundMockTest = await this.mockTestRepo.findOne({
  //       where: { id },
  //     });
  //   } catch (exp) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_IMPLEMENTED,
  //         error: contentErrors.checkingMockTest + exp,
  //       },
  //       HttpStatus.NOT_IMPLEMENTED,
  //     );
  //   }

  //   if (!foundMockTest) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_IMPLEMENTED,
  //         error: contentErrors.mockTestNotFound,
  //       },
  //       HttpStatus.NOT_IMPLEMENTED,
  //     );
  //   }

  //   try {
  //     updatedMockTest = await this.leaderboardRepo.save({
  //       ...foundMockTest,
  //       name: name ?? foundMockTest.name,
  //       subject: subject ?? foundMockTest.subject,
  //     });

  //     return {
  //       success: true,
  //       updatedMockTest,
  //     };
  //   } catch (e) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_IMPLEMENTED,
  //         error: contentErrors.updatingLeaderboard,
  //       },
  //       HttpStatus.NOT_IMPLEMENTED,
  //     );
  //   }
  // }

  // async secondsToHMS(totalSeconds) {
  //   const hours = Math.floor(totalSeconds / 3600);
  //   const minutes = Math.floor((totalSeconds % 3600) / 60);
  //   const seconds = totalSeconds % 60;
  //   const time = `${hours} hours, ${minutes} minutes, ${seconds} seconds`;
  //   return { time };
  // }

  // //old api's
  // async getSubjects(options: IPaginationOptions): Promise<Pagination<Subject>> {
  //   let foundSubjects;
  //   try {
  //     foundSubjects = await this.subjectRepo.createQueryBuilder('Subject');
  //   } catch (exp) {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_IMPLEMENTED,
  //         error: contentErrors.failedToFetchsubject + exp,
  //       },
  //       HttpStatus.NOT_IMPLEMENTED,
  //     );
  //   }
  //   return paginate<Subject>(foundSubjects, options);
  // }
}
