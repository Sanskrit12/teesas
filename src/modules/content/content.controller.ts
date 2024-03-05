import {
  Controller,
  HttpStatus,
  Res,
  Post,
  Req,
  Body,
  UseGuards,
  UsePipes,
  Get,
  Query,
} from '@nestjs/common';
import {
  GetCategorySubjectSchema,
  GetCategorySubjectDTO,
  GetLPSchema,
  GetLPDTO,
} from 'src/modules/content/dto/content.dto';
import { Request, Response } from 'express';
import { ContentService } from 'src/modules/content/content.service';
import { JwtAuthGuard } from 'src/utils/jwt.guard';
import { JoiValidationPipe } from 'src/utils/joi.validation.pipe';
import { Response as RestResponse } from '../../utils/response';
@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get('learning-packages')
  @UsePipes(new JoiValidationPipe(GetLPSchema))
  async getLPackages(
    @Req() req: Request,
    @Res({ passthrough: true }) response: Response,
    @Query() getLPDTO: GetLPDTO,
  ) {
    try {
      const result = await this.contentService.getLearningPackages(getLPDTO);
      response.status(result.status).json(result);
    } catch (e) {
      response.status(HttpStatus.BAD_REQUEST).json(
        new RestResponse({
          status: HttpStatus.BAD_REQUEST,
          message: e.message,
        }),
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Post('get-subjects-chapters')
  @UsePipes(new JoiValidationPipe(GetCategorySubjectSchema))
  async getCategorySubject(
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request,
    @Body() getCategorySubjectDTO: GetCategorySubjectDTO,
  ) {
    try {
      const user = request['user'];
      const result = await this.contentService.getCategorySubject(
        user.id,
        getCategorySubjectDTO,
      );
      response.status(result.status).json(result);
    } catch (e) {
      response.status(HttpStatus.BAD_REQUEST).json(
        new RestResponse({
          status: HttpStatus.BAD_REQUEST,
          message: e.message,
        }),
      );
    }
  }

  // @UseGuards(JwtAuthGuard)
  // @Get('get-chapter-lessons')
  // @UsePipes(new JoiValidationPipe(GetChapterLessonSchema))
  // async getChapterLesson(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  //   @Query() getChapterLessonDTO: GetChapterLessonDTO,
  // ) {
  //   try {
  //     const user = request['user'];
  //     const result = await this.contentService.getChapterLesson(
  //       user.id,
  //       getChapterLessonDTO,
  //     );
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('get-lesson-by-chapter')
  // @UsePipes(new JoiValidationPipe(GetLessonByChapterSchema))
  // async getLessonByChapter(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  //   @Query() getLessonByChapterDTO: GetLessonByChapterDTO,
  // ) {
  //   try {
  //     const user = request['user'];
  //     const result = await this.contentService.getLessonByChapter(
  //       user.id,
  //       getLessonByChapterDTO,
  //     );
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // @UseGuards(JwtAuthGuard)
  // @Post('add-learning-journey')
  // @UsePipes(new JoiValidationPipe(AddLearningJourneySchema))
  // async addLearningJourney(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  //   @Body() addLearningJourneyDTO: AddLearningJourneyDTO,
  // ) {
  //   try {
  //     const user = request['user'];
  //     const result = await this.contentService.addLearningJourney(
  //       user.id,
  //       addLearningJourneyDTO,
  //     );
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // @UseGuards(JwtAuthGuard)
  // @Post('add-favorite-video')
  // @UsePipes(new JoiValidationPipe(AddFavoriteVideoSchema))
  // async addFavoriteVideo(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  //   @Body() addFavoriteVideoDTO: AddFavoriteVideoDTO,
  // ) {
  //   try {
  //     const user = request['user'];
  //     const result = await this.contentService.addFavoriteVideo(
  //       user.id,
  //       addFavoriteVideoDTO,
  //     );
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // @UseGuards(JwtAuthGuard)
  // @Post('set-auto-play')
  // @UsePipes(new JoiValidationPipe(SetAutoPlaySchema))
  // async setAutoPlay(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  //   @Body() setAutoPlayDTO: SetAutoPlayDTO,
  // ) {
  //   try {
  //     const user = request['user'];
  //     const result = await this.contentService.setAutoPlay(
  //       user.id,
  //       setAutoPlayDTO,
  //     );
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('get-video-by-lesson')
  // @UsePipes(new JoiValidationPipe(GetVideoByLessonSchema))
  // async getVideoByLesson(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  //   @Query() getVideoByLessonDTO: GetVideoByLessonDTO,
  // ) {
  //   try {
  //     const user = request['user'];
  //     const result = await this.contentService.getVideoByLesson(
  //       user.id,
  //       getVideoByLessonDTO,
  //     );
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // @Get('get-tests')
  // @UsePipes(new JoiValidationPipe(GetTestsSchema))
  // async getTests(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  //   @Query() getTestsDTO: GetTestsDTO,
  // ) {
  //   try {
  //     const result = await this.contentService.getTests(getTestsDTO);
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // @Get('get-test-by-lesson')
  // @UsePipes(new JoiValidationPipe(GetTestByLessonSchema))
  // async getTestByLesson(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  //   @Query() getTestByLessonDTO: GetTestByLessonDTO,
  // ) {
  //   try {
  //     const result = await this.contentService.getTestByLesson(
  //       getTestByLessonDTO,
  //     );
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // @Get('get-chapters')
  // @UsePipes(new JoiValidationPipe(GetChaptersSchema))
  // async getChapters(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  //   @Query() getChaptersDTO: GetChaptersDTO,
  // ) {
  //   try {
  //     const result = await this.contentService.getChapters(getChaptersDTO);
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // @Get('get-lessons')
  // @UsePipes(new JoiValidationPipe(GetLessonsSchema))
  // async getLessons(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  //   @Query() getLessonsDTO: GetLessonsDTO,
  // ) {
  //   try {
  //     const result = await this.contentService.getLessons(getLessonsDTO);
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // @Get('subjects')
  // async getSubjects(
  //   @Req() req: Request,
  //   @Res({ passthrough: true }) resp: Response,
  //   @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
  //   @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit = 20,
  // ) {
  //   const options: IPaginationOptions = { limit, page };
  //   const subjects = await this.contentService.getSubjects(options);
  //   resp.json({
  //     status: HttpStatus.OK,
  //     message: contentMessages.subjectFetchSuccess,
  //     subjects: subjects.items,
  //     meta: subjects.meta,
  //   });
  // }

  // @Get('report-cards/:studentId')
  // async getReportCards(
  //   @Req() req: Request,
  //   @Res({ passthrough: true }) resp: Response,
  //   @Param('studentId') studentId,
  //   // @Body() body: getReportCardofStudent,
  // ) {
  //   const tests = await this.contentService.getReportCard(studentId);
  //   resp.json({
  //     status: HttpStatus.OK,
  //     message: contentMessages.reportCardFetchSuccess,
  //     reportCard: tests.foundReportCards,
  //     badges: tests.foundBadges.badges,
  //     favouriteLesson: tests.foundFavouriteLesson.lessons,
  //   });
  // }

  // @Patch('update-leaderboard/:id')
  // async updateLeaderboard(
  //   @Req() req: Request,
  //   @Res({ passthrough: true }) resp: Response,
  //   @Body() body: updateLeaderboardReq,
  //   @Param('id') id,
  // ) {
  //   const { updatedLeaderboard, success } =
  //     await this.contentService.updateLeaderboardProfile(id, {
  //       ...req.body,
  //     });

  //   if (success) {
  //     resp.json({
  //       success,
  //       message: contentMessages.updatedLeaderboardSuccess,
  //       status: HttpStatus.OK,
  //       updatedLeaderboard,
  //     });
  //   } else {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_FOUND,
  //         error: contentErrors.updatingLeaderboardFail,
  //       },
  //       HttpStatus.NOT_FOUND,
  //     );
  //   }
  // }

  // @Get('leaderboard')
  // async getLeaderboards(
  //   @Req() req: Request,
  //   @Res({ passthrough: true }) resp: Response,
  //   @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
  //   @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit = 20,
  //   @Query('id') id,
  // ) {
  //   const options: IPaginationOptions = { limit, page };
  //   const tests = await this.contentService.getLeaderboard(id, options);
  //   resp.json({
  //     status: HttpStatus.OK,
  //     message: contentMessages.leaderboardFetchSuccess,
  //     tests: tests.items,
  //     meta: tests.meta,
  //   });
  // }

  // // MOCK TEST

  // @UseGuards(JwtAuthGuard)
  // @Get('get-mock-tests')
  // async getMockTests(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  // ) {
  //   try {
  //     const user = request['user'];
  //     const result = await this.contentService.getMockTests(user.id);
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // @UseGuards(JwtAuthGuard)
  // @Get('get-mock-test-by-subject')
  // async getMockTestBySubject(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  //   @Query('id') id: string,
  // ) {
  //   try {
  //     const user = request['user'];
  //     const result = await this.contentService.getMockTestBySubject(
  //       user.id,
  //       id,
  //     );
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // // @Get('get-mock-test-by-subject/:id')
  // // async getMockTestBySubject(
  // //   @Req() req: Request,
  // //   @Res({ passthrough: true }) resp: Response,
  // //   @Param('id') id: string,
  // //   @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
  // //   @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit = 20,
  // // ) {
  // //   const options: IPaginationOptions = { limit, page };
  // //   const data = await this.contentService.getMockTestBySubject(id, options);

  // //   if (data) {
  // //     resp.json({
  // //       status: HttpStatus.OK,
  // //       message: contentMessages.mockTestFetchSuccess,
  // //       mockTests: data.items,
  // //       meta: data.meta,
  // //     });
  // //   } else {
  // //     throw new HttpException(
  // //       {
  // //         status: HttpStatus.NOT_FOUND,
  // //         error: contentErrors.checkingMockTest,
  // //       },
  // //       HttpStatus.NOT_FOUND,
  // //     );
  // //   }
  // // }

  // @UseGuards(JwtAuthGuard)
  // @Get('get-questions-by-mock-test')
  // async getMockTestQuestions(
  //   @Res({ passthrough: true }) response: Response,
  //   @Req() request: Request,
  //   @Query('mockTestId') mockTestId: string,
  // ) {
  //   try {
  //     const user = request['user'];
  //     const result = await this.contentService.getMockTestQuestions(
  //       user.id,
  //       mockTestId,
  //     );
  //     response.status(result.status).json(result);
  //   } catch (e) {
  //     response.status(HttpStatus.BAD_REQUEST).json(
  //       new RestResponse({
  //         status: HttpStatus.BAD_REQUEST,
  //         message: e.message,
  //       }),
  //     );
  //   }
  // }

  // // @Get('get-questions-by-mock-test/:id')
  // // async getMockTestQuestions(
  // //   @Req() req: Request,
  // //   @Res({ passthrough: true }) resp: Response,
  // //   @Param('id') id: string,
  // //   @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
  // //   @Query('limit', new DefaultValuePipe(20), ParseIntPipe) limit = 20,
  // // ) {
  // //   const options: IPaginationOptions = { limit, page };
  // //   const data = await this.contentService.getMockTestQuestions(id, options);

  // //   if (data) {
  // //     resp.json({
  // //       status: HttpStatus.OK,
  // //       message: contentMessages.mockTestFetchSuccess,
  // //       mockTestsQuestions: data.items,
  // //       meta: data.meta,
  // //     });
  // //   } else {
  // //     throw new HttpException(
  // //       {
  // //         status: HttpStatus.NOT_FOUND,
  // //         error: contentErrors.checkingMockTest,
  // //       },
  // //       HttpStatus.NOT_FOUND,
  // //     );
  // //   }
  // // }

  // @Patch('update-mockTest/:id')
  // async updateMockTest(
  //   @Req() req: Request,
  //   @Res({ passthrough: true }) resp: Response,
  //   @Body() body: updateMockTestReq,
  //   @Param('id') id,
  // ) {
  //   const { updatedMockTest, success } =
  //     await this.contentService.updateMockTest(id, {
  //       ...req.body,
  //     });

  //   if (success) {
  //     resp.json({
  //       success,
  //       message: contentMessages.updatedMockTestSuccess,
  //       status: HttpStatus.OK,
  //       updatedMockTest,
  //     });
  //   } else {
  //     throw new HttpException(
  //       {
  //         status: HttpStatus.NOT_FOUND,
  //         error: contentErrors.updatingMockTestFail,
  //       },
  //       HttpStatus.NOT_FOUND,
  //     );
  //   }
  // }
}
