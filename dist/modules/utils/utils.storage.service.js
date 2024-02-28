"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsStorageService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const firebase_dynamic_links_1 = require("firebase-dynamic-links");
const aws_sdk_1 = require("aws-sdk");
let UtilsStorageService = class UtilsStorageService {
    constructor(configService) {
        this.configService = configService;
    }
    async uploadMedia(file, type) {
        const { originalname } = file;
        const bucketS3 = this.configService.get('s3.bucket');
        const name = `Skagen/${Date.now()}.${originalname.split('.')[originalname.split('.').length - 1]}`;
        try {
            const response = await this.uploadS3(file.buffer, bucketS3, name);
            const url = await this.createSignedURL(response['key'] ?? response['Key']);
            return { key: response['key'] ?? response['Key'], url, type };
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async upload(file, type) {
        const { originalname } = file;
        const bucketS3 = this.configService.get('s3.bucket');
        const name = `${type}/${Date.now()}.${originalname.split('.')[originalname.split('.').length - 1]}`;
        try {
            const response = await this.uploadS3(file.buffer, bucketS3, name);
            const url = await this.createSignedURL(response['key'] ?? response['Key']);
            return { key: response['key'] ?? response['Key'], url, type };
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
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
                    common_1.Logger.error(err);
                    reject(err.message);
                }
                resolve(data);
            });
        });
    }
    getS3() {
        return new aws_sdk_1.S3({
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
    }
    async getDynamicLink(spot_id) {
        const firebaseDynamicLinks = new firebase_dynamic_links_1.FirebaseDynamicLinks('AIzaSyAJ67d5hVca9bgwKRJVsEqqJatTz8mR_Ms');
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
};
exports.UtilsStorageService = UtilsStorageService;
exports.UtilsStorageService = UtilsStorageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UtilsStorageService);
//# sourceMappingURL=utils.storage.service.js.map