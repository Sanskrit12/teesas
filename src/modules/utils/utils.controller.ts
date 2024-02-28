import {
  Controller,
  Get,
  HttpStatus,
  Post,
  Res,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { Response } from 'express';
import { UtilsService } from './utils.service';

import { Response as RestResponse } from 'src/utils/response';
import { FilesInterceptor } from '@nestjs/platform-express';

@Controller('utils')
export class UtilsController {
  constructor(private readonly utilsService: UtilsService) {}

  @Post('upload-media')
  @UseInterceptors(FilesInterceptor('files'))
  //@UsePipes(new JoiValidationPipe(UploadMediaSchema))
  async uploadMedia(
    @Res({ passthrough: true }) response: Response,
    @UploadedFiles() files: Array<any>,
    //@Body() uploadMediaDTO: UploadMediaDTO,
  ) {
    try {
      const result = await this.utilsService.uploadResource(files);
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

  @Get('get-countries')
  async getCountries(@Res({ passthrough: true }) response: Response) {
    try {
      const result = await this.utilsService.getCountries();
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
}
