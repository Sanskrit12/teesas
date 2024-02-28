import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
export declare class UtilsStorageService {
    private readonly configService;
    constructor(configService: ConfigService);
    uploadMedia(file: any, type: string): Promise<{
        key: any;
        url: string;
        type: string;
    }>;
    upload(file: any, type: string): Promise<{
        key: any;
        url: string;
        type: string;
    }>;
    uploadS3(file: any, bucket: any, name: any): Promise<unknown>;
    getS3(): S3;
    createSignedURL(key: any): Promise<string>;
    getDynamicLink(spot_id: number): Promise<string>;
}
