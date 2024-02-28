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
exports.TblPromoCode = void 0;
const typeorm_1 = require("typeorm");
let TblPromoCode = class TblPromoCode {
};
exports.TblPromoCode = TblPromoCode;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblPromoCode.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code_name', length: 255 }),
    __metadata("design:type", String)
], TblPromoCode.prototype, "codeName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'value', length: 255 }),
    __metadata("design:type", String)
], TblPromoCode.prototype, "value", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'validity' }),
    __metadata("design:type", String)
], TblPromoCode.prototype, "validity", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'limit' }),
    __metadata("design:type", Number)
], TblPromoCode.prototype, "limit", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'min_amount' }),
    __metadata("design:type", Number)
], TblPromoCode.prototype, "minAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'max_amount' }),
    __metadata("design:type", Number)
], TblPromoCode.prototype, "maxAmount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'promocode_for', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblPromoCode.prototype, "promocodeFor", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblPromoCode.prototype, "created", void 0);
exports.TblPromoCode = TblPromoCode = __decorate([
    (0, typeorm_1.Entity)('tbl_promo_code', { schema: 'teesas' })
], TblPromoCode);
//# sourceMappingURL=TblPromoCode.js.map