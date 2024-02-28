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
exports.TblParent = void 0;
const typeorm_1 = require("typeorm");
let TblParent = class TblParent {
};
exports.TblParent = TblParent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblParent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_id', length: 255 }),
    __metadata("design:type", String)
], TblParent.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_code', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblParent.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblParent.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', length: 255 }),
    __metadata("design:type", String)
], TblParent.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblParent.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'login_type', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblParent.prototype, "loginType", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblParent.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblParent.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblParent.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'parent_country_code',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], TblParent.prototype, "parentCountryCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'parent_mobile', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblParent.prototype, "parentMobile", void 0);
exports.TblParent = TblParent = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_parent', { schema: 'teesas' })
], TblParent);
//# sourceMappingURL=TblParent.js.map