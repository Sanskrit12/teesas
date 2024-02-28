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
exports.TblUser = void 0;
const typeorm_1 = require("typeorm");
let TblUser = class TblUser {
};
exports.TblUser = TblUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'class_id', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'adate', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "adate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'profile', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'otp', nullable: true }),
    __metadata("design:type", Number)
], TblUser.prototype, "otp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'avatar_index', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "avatarIndex", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_code', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'gender', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'birthday', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password_string', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "passwordString", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'country_id', nullable: true }),
    __metadata("design:type", Number)
], TblUser.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'city', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'location', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lat', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lang', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "lang", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'location_name', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "locationName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'social_id', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "socialId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'login_type', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "loginType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'profile_complete', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "profileComplete", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', { name: 'is_verified', nullable: true, default: false }),
    __metadata("design:type", Boolean)
], TblUser.prototype, "isVerified", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblUser.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'otp_created_at',
        nullable: true,
    }),
    __metadata("design:type", Date)
], TblUser.prototype, "otpCreatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'device_type', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "deviceType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'device_token', length: 255, nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "deviceToken", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'device_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblUser.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'last_visit', nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "lastVisit", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sales_ref_code', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblUser.prototype, "salesRefCode", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'status',
        enum: ['0', '1', '2'],
        default: '1',
    }),
    __metadata("design:type", String)
], TblUser.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'bulk_status',
        default: '0',
        nullable: true,
    }),
    __metadata("design:type", Number)
], TblUser.prototype, "bulkStatus", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'device_details', nullable: true }),
    __metadata("design:type", String)
], TblUser.prototype, "deviceDetails", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'is_password_setup', nullable: true, width: 1 }),
    __metadata("design:type", Boolean)
], TblUser.prototype, "isPasswordSetup", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'socket_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblUser.prototype, "socketId", void 0);
exports.TblUser = TblUser = __decorate([
    (0, typeorm_1.Index)('class_id', ['classId'], {}),
    (0, typeorm_1.Index)('country_id', ['countryId'], {}),
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Entity)('tbl_user', { schema: 'teesas' })
], TblUser);
//# sourceMappingURL=TblUser.js.map