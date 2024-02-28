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
exports.TblSkipUsers = void 0;
const typeorm_1 = require("typeorm");
let TblSkipUsers = class TblSkipUsers {
};
exports.TblSkipUsers = TblSkipUsers;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblSkipUsers.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'adate', length: 250 }),
    __metadata("design:type", String)
], TblSkipUsers.prototype, "adate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 250 }),
    __metadata("design:type", String)
], TblSkipUsers.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_code', length: 250 }),
    __metadata("design:type", String)
], TblSkipUsers.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile', length: 250 }),
    __metadata("design:type", String)
], TblSkipUsers.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', length: 250 }),
    __metadata("design:type", String)
], TblSkipUsers.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'gender', length: 250 }),
    __metadata("design:type", String)
], TblSkipUsers.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'birthday', length: 250 }),
    __metadata("design:type", String)
], TblSkipUsers.prototype, "birthday", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'country_id' }),
    __metadata("design:type", Number)
], TblSkipUsers.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblSkipUsers.prototype, "created", void 0);
exports.TblSkipUsers = TblSkipUsers = __decorate([
    (0, typeorm_1.Entity)('tbl_skip_users', { schema: 'teesas' })
], TblSkipUsers);
//# sourceMappingURL=TblSkipUsers.js.map