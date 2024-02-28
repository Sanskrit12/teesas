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
exports.TblTeacher = void 0;
const typeorm_1 = require("typeorm");
let TblTeacher = class TblTeacher {
};
exports.TblTeacher = TblTeacher;
__decorate([
    (0, typeorm_1.Column)('int', { primary: true, name: 'id' }),
    __metadata("design:type", Number)
], TblTeacher.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], TblTeacher.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', length: 255 }),
    __metadata("design:type", String)
], TblTeacher.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'profile', length: 255 }),
    __metadata("design:type", String)
], TblTeacher.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password', length: 255 }),
    __metadata("design:type", String)
], TblTeacher.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblTeacher.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'status',
        nullable: true,
        comment: '0 inaction 1 acctive 2 block ',
        enum: ['0', '1', '2'],
    }),
    __metadata("design:type", String)
], TblTeacher.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'device_token', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblTeacher.prototype, "deviceToken", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'device_type', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblTeacher.prototype, "deviceType", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'create_time',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblTeacher.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'country_id', nullable: true }),
    __metadata("design:type", String)
], TblTeacher.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'socket_id', nullable: true }),
    __metadata("design:type", String)
], TblTeacher.prototype, "socketId", void 0);
exports.TblTeacher = TblTeacher = __decorate([
    (0, typeorm_1.Index)('country_id', ['countryId'], {}),
    (0, typeorm_1.Index)('device_token', ['deviceToken'], {}),
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Entity)('tbl_teacher', { schema: 'teesas' })
], TblTeacher);
//# sourceMappingURL=TblTeacher.js.map