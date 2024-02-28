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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const dotenv_1 = require("dotenv");
const TblUser_1 = require("../../models/entities/TblUser");
const TblParent_1 = require("../../models/entities/TblParent");
const messages_1 = require("../../utils/messages");
const logger_1 = require("../../utils/logger");
const response_1 = require("../../utils/response");
const utils_helper_service_1 = require("../utils/utils.helper.service");
const moment = require("moment-timezone");
const utils_timezone_service_1 = require("../utils/utils.timezone.service");
(0, dotenv_1.config)();
let AuthService = class AuthService {
    constructor(jwtService, utilsHelperService, utilsTimezoneService, userRepo, parentRepo) {
        this.jwtService = jwtService;
        this.utilsHelperService = utilsHelperService;
        this.utilsTimezoneService = utilsTimezoneService;
        this.userRepo = userRepo;
        this.parentRepo = parentRepo;
    }
    async registerUser(registerDTO) {
        try {
            const { name, email, mobile, countryId, password, userType } = registerDTO;
            let user = await this.userRepo.findOneBy({ mobile });
            if (user) {
                throw new common_1.BadRequestException(messages_1.authMessages.phoneAlreadyUsed);
            }
            user = await this.userRepo.findOneBy({ email });
            if (user) {
                throw new common_1.BadRequestException(messages_1.authMessages.emailAlreadyUsed);
            }
            user = await this.userRepo.save({
                name,
                email,
                mobile,
                countryId: countryId,
                loginType: 'MANUAL',
                password: await this.utilsHelperService.hashPassword(password),
            });
            const data = await this.utilsHelperService.getUser(user.id);
            data['token'] = this.jwtService.sign({ id: user.id });
            return new response_1.Response({
                data: { user: data },
                message: messages_1.authMessages.userRegistered,
            });
        }
        catch (e) {
            logger_1.default.error(e);
            throw new common_1.BadRequestException(e.message);
        }
    }
    async socialAuth(socialAuthDTO) {
        try {
            const { social_id, name } = socialAuthDTO;
            let user = await this.userRepo.findOneBy({ socialId: social_id });
            if (user) {
                user = await this.userRepo.save({
                    id: user.id,
                    login_type: 'SOCIAL',
                });
            }
            if (!user) {
                user = await this.userRepo.save({
                    socialId: social_id,
                    name: name,
                    loginType: 'SOCIAL',
                });
            }
            if (user.status == '0') {
                throw new common_1.BadRequestException(messages_1.authMessages.userSuspended);
            }
            const data = await this.utilsHelperService.getUser(user.id);
            data['token'] = this.jwtService.sign({ id: user.id });
            return new response_1.Response({
                data: { user: data },
                message: messages_1.authMessages.loginSuccessfully,
            });
        }
        catch (e) {
            logger_1.default.error(e);
            throw new common_1.BadRequestException(e.message);
        }
    }
    async login(loginDTO) {
        try {
            const { email, phone, password } = loginDTO;
            let user;
            const suspended_user = await this.userRepo.findOne({
                where: [
                    {
                        email,
                        status: '0',
                    },
                    {
                        mobile: phone ? phone : undefined,
                        status: '0',
                    },
                ],
            });
            if (suspended_user) {
                throw new common_1.BadRequestException(messages_1.authMessages.userSuspended);
            }
            if (email) {
                user = await this.userRepo.findOne({
                    where: {
                        email,
                        status: '1',
                    },
                });
                if (!user) {
                    throw new common_1.BadRequestException(messages_1.authMessages.emailNotRegistered);
                }
            }
            else if (phone) {
                user = await this.userRepo.findOne({
                    where: {
                        mobile: phone,
                        status: '1',
                    },
                });
                if (!user) {
                    throw new common_1.BadRequestException(messages_1.authMessages.phoneNotRegistered);
                }
            }
            if (user) {
                if (user.loginType != 'MANUAL') {
                    throw new common_1.BadRequestException(messages_1.authMessages.EmailUsedInSocial);
                }
                if (await this.utilsHelperService.comparePassword(password, user.password)) {
                    await this.userRepo.save({
                        id: user.id,
                        loginType: 'MANUAL',
                    });
                    const data = await this.utilsHelperService.getUser(user.id);
                    data['token'] = this.jwtService.sign({ id: user.id });
                    return new response_1.Response({
                        data: { user: data },
                        message: messages_1.authMessages.loginSuccessfully,
                    });
                }
                else {
                    throw new common_1.BadRequestException(messages_1.authMessages.invalidCredentials);
                }
            }
            else {
                throw new common_1.BadRequestException(messages_1.authMessages.emailNotRegistered);
            }
        }
        catch (e) {
            logger_1.default.error(e);
            throw new common_1.BadRequestException(e.message);
        }
    }
    async sendVerificationCode(sendVerificationCodeDTO) {
        try {
            const { email } = sendVerificationCodeDTO;
            const code = Math.floor(Math.random() * 900000) + 100000;
            const user = await this.userRepo.findOneBy({ email });
            if (user) {
                if (user.loginType != 'MANUAL') {
                    throw new common_1.BadRequestException(messages_1.authMessages.emailNotRegistered);
                }
                if (user.status != '1') {
                    throw new common_1.BadRequestException(messages_1.authMessages.accountDisabled);
                }
                await this.userRepo.save({
                    id: user.id,
                    otp: code,
                    otpCreatedAt: moment
                        .tz('Africa/Harare')
                        .format('YYYY-MM-DD HH:mm:ss'),
                });
            }
            else if (!user) {
                await this.userRepo.save({
                    email,
                    otp: code,
                });
            }
            return new response_1.Response({
                data: {},
                message: messages_1.authMessages.forgotPasswordMailSend,
            });
        }
        catch (e) {
            logger_1.default.error(e);
            throw new common_1.BadRequestException(e.message);
        }
    }
    async verifyToken(verifyTokenDTO) {
        try {
            const { otp, email } = verifyTokenDTO;
            const user = await this.userRepo.findOne({
                where: {
                    email,
                    status: '1',
                },
            });
            const date = this.utilsTimezoneService
                .getDateTime(true)
                .subtract('15', 'minutes');
            const createdAt = this.utilsTimezoneService.parseTime(user.otpCreatedAt.toString(), true);
            if (user.otp == otp) {
                if (createdAt.isBefore(date)) {
                    throw new common_1.BadRequestException(messages_1.authMessages.otpExpired);
                }
                await this.userRepo.save({
                    id: user.id,
                    isVerified: true,
                });
                const data = await this.utilsHelperService.getUser(user.id);
                data['token'] = this.jwtService.sign({ id: data.id });
                return new response_1.Response({
                    data: { user: data },
                    message: messages_1.authMessages.otpVerifiedSuccess,
                });
            }
            else {
                throw new common_1.BadRequestException(messages_1.authMessages.incorrectOTP);
            }
        }
        catch (e) {
            logger_1.default.error(e);
            throw new common_1.BadRequestException(e.message);
        }
    }
    async resetPassword(resetPasswordDTO) {
        try {
            const { email, password } = resetPasswordDTO;
            let user = await this.userRepo.findOneBy({ email });
            if (!user) {
                throw new common_1.BadRequestException(messages_1.authMessages.emailNotRegistered);
            }
            else if (user.status != '1') {
                throw new common_1.BadRequestException(messages_1.authMessages.accountDisabled);
            }
            user = await this.userRepo.save({
                id: user.id,
                password: await this.utilsHelperService.hashPassword(password),
            });
            const data = await this.utilsHelperService.getUser(user.id);
            return new response_1.Response({
                data: { user: data },
                message: messages_1.authMessages.passwordResetSuccess,
            });
        }
        catch (e) {
            logger_1.default.error(e);
            throw new common_1.BadRequestException(e.message);
        }
    }
    async checkEmailPhone(checkEmailPhoneDTO) {
        try {
            const { phone, email } = checkEmailPhoneDTO;
            let is_unique = true;
            if (email) {
                const user = await this.userRepo.findOne({
                    where: {
                        email,
                    },
                });
                if (user) {
                    is_unique = false;
                }
            }
            else if (phone) {
                const user = await this.userRepo.findOne({
                    where: {
                        mobile: phone,
                    },
                });
                if (user) {
                    is_unique = false;
                }
            }
            return new response_1.Response({
                data: { is_unique: is_unique },
                message: messages_1.authMessages.checked,
            });
        }
        catch (e) {
            logger_1.default.error(e);
            throw new common_1.BadRequestException(e.message);
        }
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, typeorm_1.InjectRepository)(TblUser_1.TblUser)),
    __param(4, (0, typeorm_1.InjectRepository)(TblParent_1.TblParent)),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        utils_helper_service_1.UtilsHelperService,
        utils_timezone_service_1.UtilsTimezoneService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], AuthService);
//# sourceMappingURL=auth.service.js.map