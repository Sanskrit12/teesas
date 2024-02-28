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
exports.UtilsHelperService = void 0;
const common_1 = require("@nestjs/common");
const bcrypt = require("bcrypt");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const TblUser_1 = require("../../models/entities/TblUser");
let UtilsHelperService = class UtilsHelperService {
    constructor(userRepo) {
        this.userRepo = userRepo;
    }
    async hashPassword(password) {
        const saltOrRounds = 10;
        return await bcrypt.hash(password, saltOrRounds);
    }
    async comparePassword(password, hash) {
        return await bcrypt.compare(password, hash);
    }
    async getUser(id) {
        return await this.userRepo.findOne({
            where: {
                id: id,
            },
            select: {
                id: true,
                socketId: true,
                socialId: true,
                name: true,
                email: true,
                mobile: true,
                password: true,
                status: true,
                created: true,
                lastVisit: true,
            },
        });
    }
};
exports.UtilsHelperService = UtilsHelperService;
exports.UtilsHelperService = UtilsHelperService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(TblUser_1.TblUser)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], UtilsHelperService);
//# sourceMappingURL=utils.helper.service.js.map