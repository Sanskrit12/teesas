import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { FirebaseDynamicLinks } from 'firebase-dynamic-links';
import { S3 } from 'aws-sdk';

@Injectable()
export class UtilsStorageService {
  constructor(private readonly configService: ConfigService) {}

  // async uploadResource(file, uploadResourceDTO: UploadResourceDTO) {
  //   try {
  //     const { type } = uploadResourceDTO;
  //     const resource = await this.upload(file, type);
  //     return new Response({
  //       data: { resource },
  //       message: usersMessages.resourceUploaded,
  //     });
  //   } catch (e) {
  //     throw new BadRequestException(e.message);
  //   }
  // }

  async uploadMedia(file: any, type: string) {
    const { originalname } = file;
    const bucketS3 = this.configService.get('s3.bucket');
    const name = `Skagen/${Date.now()}.${
      originalname.split('.')[originalname.split('.').length - 1]
    }`;
    try {
      const response = await this.uploadS3(file.buffer, bucketS3, name);
      const url = await this.createSignedURL(
        response['key'] ?? response['Key'],
      );
      return { key: response['key'] ?? response['Key'], url, type };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async upload(file: any, type: string) {
    const { originalname } = file;
    const bucketS3 = this.configService.get('s3.bucket');
    const name = `${type}/${Date.now()}.${
      originalname.split('.')[originalname.split('.').length - 1]
    }`;
    try {
      const response = await this.uploadS3(file.buffer, bucketS3, name);
      const url = await this.createSignedURL(
        response['key'] ?? response['Key'],
      );
      return { key: response['key'] ?? response['Key'], url, type };
    } catch (e) {
      throw new BadRequestException(e.message);
    }
  }

  async uploadS3(file, bucket, name) {
    const s3 = this.getS3();
    const params = {
      Bucket: bucket,
      Key: String(name),
      Body: file,
    };
    return new Promise((resolve, reject) => {
      s3.upload(params, (err, data) => {
        if (err) {
          Logger.error(err);
          reject(err.message);
        }
        resolve(data);
      });
    });
  }

  getS3() {
    return new S3({
      accessKeyId: this.configService.get('s3.key'),
      secretAccessKey: this.configService.get('s3.secret'),
      region: this.configService.get('s3.region'),
      signatureVersion: 'v4',
    });
  }

  async createSignedURL(key) {
    const s3 = this.getS3();
    const signedUrlExpireSeconds = 604800;
    const signedURL = await s3.getSignedUrlPromise('getObject', {
      Bucket: this.configService.get('s3.bucket'),
      Key: key,
      Expires: signedUrlExpireSeconds,
    });
    const shortURL = signedURL.split("?")[0];
    return shortURL;
    // return s3.getSignedUrl('getObject', {
    //   Bucket: this.configService.get('s3.bucket'),
    //   Key: key,
    //   Expires: signedUrlExpireSeconds,
    // });
  }

  async getDynamicLink(spot_id: number): Promise<string> {
    const firebaseDynamicLinks = new FirebaseDynamicLinks(
      'AIzaSyAJ67d5hVca9bgwKRJVsEqqJatTz8mR_Ms',
    );
    const androidPackageName = 'com.tucktek';
    const iosBundleId = 'com.tucktek';
    const { shortLink, previewLink } = await firebaseDynamicLinks.createLink({
      dynamicLinkInfo: {
        domainUriPrefix: 'https://tucktek.page.link',
        link: `https://tucktek.page.link/?spotId=${spot_id}`,
        androidInfo: {
          androidPackageName,
        },
        iosInfo: {
          iosBundleId,
        },
      },
    });

    return previewLink.replace('d=1', 'd=0');
  }

  // async upload(file: any, type: string) {
  //   const { originalname, buffer } = file;
  //   const uploadPath = this.configService.get<string>('local.uploadPath');
  //   const uniqueIdentifier = uuidv4();
  //   const name = `media/${uniqueIdentifier}_${Date.now()}.${
  //     originalname.split('.')[originalname.split('.').length - 1]
  //   }`;
  //   const filePath = `${uploadPath}/${name}`;

  //   try {
  //     await this.uploadLocal(file, filePath);
  //     return { key: name, filePath, type };
  //   } catch (e) {
  //     throw new BadRequestException(e.message);
  //   }
  // }
  // async uploadLocal(files: any | any[], type: string) {
  //   try {
  //     // Ensure files is an array
  //     const filesArray = Array.isArray(files) ? files : [files];

  //     const uploadPromises = filesArray.map(async (currentFile) => {
  //       if (!currentFile || !currentFile.originalname || !currentFile.buffer) {
  //         // Skip processing if file is not valid
  //         return null;
  //       }

  //       const { originalname, buffer } = currentFile;
  //       const uploadPath = this.configService.get<string>('local.uploadPath');
  //       const name = `media/${Date.now()}.${
  //         originalname.split('.')[originalname.split('.').length - 1]
  //       }`;
  //       const filePath = `${uploadPath}/${name}`;

  //       await this.uploadLocalSingle(buffer, filePath);

  //       return { key: name, filePath, type };
  //     });

  //     // Filter out null values from skipped files
  //     const results = (await Promise.all(uploadPromises)).filter(
  //       (result) => result !== null,
  //     );

  //     return results;
  //   } catch (error) {
  //     Logger.error(error);
  //     throw new Error(`Failed to upload local files: ${error.message}`);
  //   }
  // }

  // async uploadLocalSingle(file: any, filePath: string) {
  //   try {
  //     //const directoryPath = join(filePath, '..'); // Extract the directory path
  //     const directoryPath = path.dirname(filePath);
  //     await fsPromises.mkdir(directoryPath, { recursive: true }); // Create directories if they don't exist

  //     // Create a write stream for the file
  //     const writeStream = createWriteStream(filePath);

  //     // Write the file buffer to the stream
  //     writeStream.write(file);

  //     // End the stream to finish writing
  //     writeStream.end();

  //     // Return a Promise that resolves when the file is written
  //     return new Promise<void>((resolve, reject) => {
  //       writeStream.on('finish', () => resolve());
  //       writeStream.on('error', (error) => {
  //         Logger.error(error);
  //         reject(error.message);
  //       });
  //     });
  //   } catch (error) {
  //     Logger.error(error);
  //     throw new Error(`Failed to upload local file: ${error.message}`);
  //   }
  // }

  // async createSignedURL(fileKey: string): Promise<string> {
  //   return new Promise((resolve) => {
  //     // Assuming localUploadPath is configured in your application
  //     const localUploadPath = '/uploads';

  //     // Construct the local URL by combining the base path and the file key
  //     const localFilePath = path.join(__dirname, localUploadPath, fileKey);
  //     // Return the local URL
  //     resolve(`http://localhost:3000/${localFilePath}`); // Replace with your actual server URL
  //   });
  // }
  // async uploadLocal(file: any, filePath: string) {
  //   try {
  //     const directoryPath = join(filePath, '..'); // Extract the directory path
  //     await fsPromises.mkdir(directoryPath, { recursive: true }); // Create directories if they don't exist

  //     // Create a write stream for the file
  //     const writeStream = createWriteStream(filePath);

  //     // Write the file buffer to the stream
  //     writeStream.write(file);

  //     // End the stream to finish writing
  //     writeStream.end();

  //     // Return a Promise that resolves when the file is written
  //     return new Promise<void>((resolve, reject) => {
  //       writeStream.on('finish', () => resolve());
  //       writeStream.on('error', (error) => {
  //         Logger.error(error);
  //         reject(error.message);
  //       });
  //     });
  //   } catch (error) {
  //     Logger.error(error);
  //     throw new Error(`Failed to upload local file: ${error.message}`);
  //   }
  // }

  // getS3() {
  //   return new S3({
  //     region: this.configService.get('s3.region'),
  //     credentials: {
  //       accessKeyId: this.configService.get('s3.key'),
  //       secretAccessKey: this.configService.get('s3.secret'),
  //     },
  //   });
  // }

  // async upload(file: any, type: string) {
  //   const { originalname } = file;
  //   const bucketS3 = this.configService.get('s3.bucket');
  //   const name = `media/${Date.now()}.${
  //     originalname.split('.')[originalname.split('.').length - 1]
  //   }`;
  //   try {
  //     await this.uploadS3(file.buffer, bucketS3, name);
  //     const url = await this.createSignedURL(name);
  //     return { key: name, url, type };
  //   } catch (e) {
  //     throw new BadRequestException(e.message);
  //   }
  // }

  // async uploadS3(file: any, bucket: string, name: string) {
  //   const s3 = this.getS3();
  //   const params = new PutObjectCommand({
  //     Bucket: bucket,
  //     Key: String(name),
  //     Body: file,
  //   });

  //   return new Promise((resolve, reject) => {
  //     s3.send(params, (err, data) => {
  //       if (err) {
  //         Logger.error(err);
  //         reject(err.message);
  //       }
  //       resolve(data);
  //     });
  //   });
  // }

  // async createSignedURL(key: string) {
  //   const s3 = this.getS3();
  //   const signedUrlExpireSeconds = 604800;
  //   const command = new GetObjectCommand({
  //     Bucket: this.configService.get('s3.bucket'),
  //     Key: key,
  //   });
  //   return getSignedUrl(s3, command, { expiresIn: signedUrlExpireSeconds });
  // }
}
