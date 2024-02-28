import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
// import { UploadMediaDTO } from './dto/util.dto';
import { Response } from '../../utils/response';
import { utils } from 'src/utils/messages';
import { UtilsStorageService } from './utils.storage.service';
import { CountryList } from 'src/models/entities/CountryList';
@Injectable()
export class UtilsService {
  constructor(
    private readonly utilsStorageService: UtilsStorageService,
    @InjectRepository(CountryList)
    private countriesRepo: Repository<CountryList>,
  ) {}

  async getCountries(): Promise<Response> {
    try {
      const data = await this.countriesRepo.find({
        order: {
          country: 'asc',
        },
      });
      return new Response({
        data: {
          countries: data,
        },
        message: utils.countries_fetched,
      });
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException(e.message);
    }
  }

  async uploadMedia(files: any[]) {
    try {
      const filesArray = Array.isArray(files) ? files : [files];
      const resources = await Promise.all(
        filesArray.map(async (file) => {
          const fileType = await determineFileType(file.originalname);
          // Now, 'fileType' should contain the file type (e.g., 'image', 'video', 'audio')
          return this.utilsStorageService.upload(file, fileType);
        }),
      );

      return {
        data: { resources },
      };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async uploadResource(files: any[]) {
    try {
      const filesArray = Array.isArray(files) ? files : [files];
      const resources = await Promise.all(
        filesArray.map(async (file) => {
          const fileType = await determineFileType(file.originalname);
          // Now, 'fileType' should contain the file type (e.g., 'image', 'video', 'audio')
          return this.utilsStorageService.uploadMedia(file, fileType);
        }),
      );
      return new Response({
        data: { resources: resources[0] },
        message: utils.fileUploaded,
      });
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }
}

async function determineFileType(fileName: string): Promise<string | null> {
  if (fileName) {
    const fileExtension = fileName.split('.')[1];
    const extensionToTypeMap: { [key: string]: string } = {
      mp4: 'video',
      avi: 'video',
      mpeg4: 'video',
      mp3: 'audio',
      m4a: 'audio',
      MP4: 'video',
      AVI: 'video',
      MPEG4: 'video',
      MP3: 'audio',
      jpg: 'image',
      jpeg: 'image',
      png: 'image',
      JPG: 'image',
      tiff: 'image',
      TIFF: 'image',
      JPEG: 'image',
      PNG: 'image',
      mov: 'video',
      MOV: 'video',
      M4A: 'audio',
      pdf: 'pdf',
      PDF: 'PDF',
    };

    if (extensionToTypeMap[fileExtension]) {
      return extensionToTypeMap[fileExtension];
    }
    return null;
  }
  return null;
}
