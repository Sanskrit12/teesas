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
exports.TableUsers = void 0;
const typeorm_1 = require("typeorm");
const TableParents_1 = require("./TableParents");
const TableUserClassHistories_1 = require("./TableUserClassHistories");
let TableUsers = class TableUsers {
};
exports.TableUsers = TableUsers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], TableUsers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'class_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'adate', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "adate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'profile', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'avtar_index', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "avtarIndex", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_code', length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile', length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'gender', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'birthday', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password', length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'password_string', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "passwordString", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'city', length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'location', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lat', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "lat", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lang', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "lang", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'location_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "locationName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'social_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "socialId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'login_type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "loginType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'profile_type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "profileType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'device_type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "deviceType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'device_token', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "deviceToken", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'device_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUsers.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'last_visit', nullable: true }),
    __metadata("design:type", String)
], TableUsers.prototype, "lastVisit", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'status', length: 255, default: () => "'1'" }),
    __metadata("design:type", String)
], TableUsers.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], TableUsers.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], TableUsers.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TableParents_1.TableParents, (tableParents) => tableParents.tableUser),
    __metadata("design:type", Array)
], TableUsers.prototype, "tableParents", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TableUserClassHistories_1.TableUserClassHistories, (tableUserClassHistories) => tableUserClassHistories.tableUser),
    __metadata("design:type", Array)
], TableUsers.prototype, "tableUserClassHistories", void 0);
exports.TableUsers = TableUsers = __decorate([
    (0, typeorm_1.Entity)('table_users', { schema: 'teesas' })
], TableUsers);
//# sourceMappingURL=TableUsers.js.map