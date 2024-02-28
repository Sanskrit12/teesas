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
exports.UtilsController = void 0;
const common_1 = require("@nestjs/common");
const utils_service_1 = require("./utils.service");
const response_1 = require("../../utils/response");
const platform_express_1 = require("@nestjs/platform-express");
let UtilsController = class UtilsController {
    constructor(utilsService) {
        this.utilsService = utilsService;
    }
    async uploadMedia(response, files) {
        try {
            const result = await this.utilsService.uploadResource(files);
            response.status(result.status).json(result);
        }
        catch (e) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json(new response_1.Response({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: e.message,
            }));
        }
    }
    async getCountries(response) {
        try {
            const result = await this.utilsService.getCountries();
            response.status(result.status).json(result);
        }
        catch (e) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json(new response_1.Response({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: e.message,
            }));
        }
    }
};
exports.UtilsController = UtilsController;
__decorate([
    (0, common_1.Post)('upload-media'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('files')),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Array]),
    __metadata("design:returntype", Promise)
], UtilsController.prototype, "uploadMedia", null);
__decorate([
    (0, common_1.Get)('get-countries'),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UtilsController.prototype, "getCountries", null);
exports.UtilsController = UtilsController = __decorate([
    (0, common_1.Controller)('utils'),
    __metadata("design:paramtypes", [utils_service_1.UtilsService])
], UtilsController);
//# sourceMappingURL=utils.controller.js.map