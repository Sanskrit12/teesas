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
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const auth_service_1 = require("./auth.service");
const auth_dto_1 = require("./dto/auth.dto");
const joi_validation_pipe_1 = require("../../utils/joi.validation.pipe");
const response_1 = require("../../utils/response");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async register(registerDTO, response) {
        try {
            const result = await this.authService.registerUser(registerDTO);
            response.status(result.status).json(result);
        }
        catch (e) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json(new response_1.Response({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: e.message,
            }));
        }
    }
    async socialAuth(socialAuthDTO, response) {
        try {
            const result = await this.authService.socialAuth(socialAuthDTO);
            response.status(result.status).json(result);
        }
        catch (e) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json(new response_1.Response({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: e.message,
            }));
        }
    }
    async login(loginDTO, response) {
        try {
            const result = await this.authService.login(loginDTO);
            response.status(result.status).json(result);
        }
        catch (e) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json(new response_1.Response({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: e.message,
            }));
        }
    }
    async requestForgotPassword(sendVerificationCodeDTO, response) {
        try {
            const result = await this.authService.sendVerificationCode(sendVerificationCodeDTO);
            response.status(result.status).json(result);
        }
        catch (e) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json(new response_1.Response({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: e.message,
            }));
        }
    }
    async verifyToken(response, verifyTokenDTO) {
        try {
            const result = await this.authService.verifyToken(verifyTokenDTO);
            response.status(result.status).json(result);
        }
        catch (e) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json(new response_1.Response({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: e.message,
            }));
        }
    }
    async resetPassword(resetPasswordDTO, response) {
        try {
            const result = await this.authService.resetPassword(resetPasswordDTO);
            response.status(result.status).json(result);
        }
        catch (e) {
            response.status(common_1.HttpStatus.BAD_REQUEST).json(new response_1.Response({
                status: common_1.HttpStatus.BAD_REQUEST,
                message: e.message,
            }));
        }
    }
    async checkEmailPhone(response, checkEmailPhoneDTO) {
        try {
            const result = await this.authService.checkEmailPhone(checkEmailPhoneDTO);
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
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    (0, common_1.UsePipes)(new joi_validation_pipe_1.JoiValidationPipe(auth_dto_1.RegisterSchema)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('social-auth'),
    (0, common_1.UsePipes)(new joi_validation_pipe_1.JoiValidationPipe(auth_dto_1.SocialAuthSchema)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SocialAuthDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "socialAuth", null);
__decorate([
    (0, common_1.Post)('login'),
    (0, common_1.UsePipes)(new joi_validation_pipe_1.JoiValidationPipe(auth_dto_1.LoginSchema)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.LoginDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('send-verification-code'),
    (0, common_1.UsePipes)(new joi_validation_pipe_1.JoiValidationPipe(auth_dto_1.SendVerificationCodeSchema)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.SendVerificationCodeDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "requestForgotPassword", null);
__decorate([
    (0, common_1.Post)('verify-code'),
    (0, common_1.UsePipes)(new joi_validation_pipe_1.JoiValidationPipe(auth_dto_1.VerifyTokenSchema)),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_1.VerifyTokenDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyToken", null);
__decorate([
    (0, common_1.Post)('reset-password'),
    (0, common_1.UsePipes)(new joi_validation_pipe_1.JoiValidationPipe(auth_dto_1.ResetPasswordSchema)),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)({ passthrough: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [auth_dto_1.ResetPasswordDTO, Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Post)('check-email-phone'),
    (0, common_1.UsePipes)(new joi_validation_pipe_1.JoiValidationPipe(auth_dto_1.CheckEmailPhoneSchema)),
    __param(0, (0, common_1.Res)({ passthrough: true })),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, auth_dto_1.CheckEmailPhoneDTO]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "checkEmailPhone", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map