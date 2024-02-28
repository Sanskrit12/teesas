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
exports.TblBadges = void 0;
const typeorm_1 = require("typeorm");
let TblBadges = class TblBadges {
};
exports.TblBadges = TblBadges;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblBadges.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'icon', length: 250 }),
    __metadata("design:type", String)
], TblBadges.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 250 }),
    __metadata("design:type", String)
], TblBadges.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', length: 250 }),
    __metadata("design:type", String)
], TblBadges.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'days' }),
    __metadata("design:type", Number)
], TblBadges.prototype, "days", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_date',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblBadges.prototype, "createdDate", void 0);
exports.TblBadges = TblBadges = __decorate([
    (0, typeorm_1.Entity)('tbl_badges', { schema: 'teesas' })
], TblBadges);
//# sourceMappingURL=TblBadges.js.map