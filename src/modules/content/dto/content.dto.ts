import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { User } from 'src/modules/user/entity/user.entity';
import * as Joi from 'joi';
export class updateLeaderboardReq {
  @IsNotEmpty()
  @IsNumber()
  points: number;
}

export class updateMockTestReq {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  subject: string;
}
export class GetStudentReq {
  @IsString()
  parentId: string;

  @IsNotEmpty()
  @IsString()
  user: User;
}
export class getReportCardofStudent {
  @IsNotEmpty()
  @IsString()
  studentId: string;
}

export interface GetCategorySubjectDTO {
  packageId: number[];
}
export const GetCategorySubjectSchema = Joi.object({
  packageId: Joi.array().items(Joi.number()).required(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});

export interface GetChapterLessonDTO {
  subjectId: string;
}
export const GetChapterLessonSchema = Joi.object({
  subjectId: Joi.string().required(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});
export interface GetLessonByChapterDTO {
  chapterId: string;
}
export const GetLessonByChapterSchema = Joi.object({
  chapterId: Joi.string().required(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});
export interface GetVideoByLessonDTO {
  lessonId: string;
}
export const GetVideoByLessonSchema = Joi.object({
  lessonId: Joi.string().required(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});

export interface GetTestsDTO {
  testId: string;
}
export const GetTestsSchema = Joi.object({
  testId: Joi.string().optional(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});

export interface GetTestByLessonDTO {
  lessonId: string;
}
export const GetTestByLessonSchema = Joi.object({
  lessonId: Joi.string().required(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});
export interface AddLearningJourneyDTO {
  chapterId: string;
  lessonId: string;
  completion: number;
  //isFavorite: boolean;
  isAutoPlay: boolean;
}
export const AddLearningJourneySchema = Joi.object({
  chapterId: Joi.string().required(),
  lessonId: Joi.string().required(),
  completion: Joi.number().required(),
  // isFavorite: Joi.boolean().required(),
  isAutoPlay: Joi.boolean().required(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});

export interface AddFavoriteVideoDTO {
  lessonId: string;
  isFavorite: boolean;
}
export const AddFavoriteVideoSchema = Joi.object({
  lessonId: Joi.string().required(),
  isFavorite: Joi.boolean().required(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});

export interface SetAutoPlayDTO {
  isAutoPlay: boolean;
}
export const SetAutoPlaySchema = Joi.object({
  isAutoPlay: Joi.boolean().required(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});

export interface GetChaptersDTO {
  packageId: string;
}
export const GetChaptersSchema = Joi.object({
  packageId: Joi.string().optional(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});

export interface GetLessonsDTO {
  chapterId: string;
}
export const GetLessonsSchema = Joi.object({
  chapterId: Joi.string().optional(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});
