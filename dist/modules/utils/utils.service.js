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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const response_1 = require("../../utils/response");
const messages_1 = require("../../utils/messages");
const utils_storage_service_1 = require("./utils.storage.service");
const CountryList_1 = require("../../models/entities/CountryList");
let UtilsService = class UtilsService {
    constructor(utilsStorageService, countriesRepo) {
        this.utilsStorageService = utilsStorageService;
        this.countriesRepo = countriesRepo;
    }
    async getCountries() {
        try {
            const data = await this.countriesRepo.find({
                order: {
                    country: 'asc',
                },
            });
            return new response_1.Response({
                data: {
                    countries: data,
                },
                message: messages_1.utils.countries_fetched,
            });
        }
        catch (e) {
            common_1.Logger.error(e);
            throw new common_1.BadRequestException(e.message);
        }
    }
    async uploadMedia(files) {
        try {
            const filesArray = Array.isArray(files) ? files : [files];
            const resources = await Promise.all(filesArray.map(async (file) => {
                const fileType = await determineFileType(file.originalname);
                return this.utilsStorageService.upload(file, fileType);
            }));
            return {
                data: { resources },
            };
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
    async uploadResource(files) {
        try {
            const filesArray = Array.isArray(files) ? files : [files];
            const resources = await Promise.all(filesArray.map(async (file) => {
                const fileType = await determineFileType(file.originalname);
                return this.utilsStorageService.uploadMedia(file, fileType);
            }));
            return new response_1.Response({
                data: { resources: resources[0] },
                message: messages_1.utils.fileUploaded,
            });
        }
        catch (e) {
            throw new common_1.BadRequestException(e.message);
        }
    }
};
exports.UtilsService = UtilsService;
exports.UtilsService = UtilsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(CountryList_1.CountryList)),
    __metadata("design:paramtypes", [utils_storage_service_1.UtilsStorageService,
        typeorm_2.Repository])
], UtilsService);
async function determineFileType(fileName) {
    if (fileName) {
        const fileExtension = fileName.split('.')[1];
        const extensionToTypeMap = {
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
//# sourceMappingURL=utils.service.js.map