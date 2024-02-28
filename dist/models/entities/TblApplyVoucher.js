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
exports.TblApplyVoucher = void 0;
const typeorm_1 = require("typeorm");
let TblApplyVoucher = class TblApplyVoucher {
};
exports.TblApplyVoucher = TblApplyVoucher;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblApplyVoucher.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblApplyVoucher.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'voucher_id' }),
    __metadata("design:type", Number)
], TblApplyVoucher.prototype, "voucherId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'voucher', length: 250 }),
    __metadata("design:type", String)
], TblApplyVoucher.prototype, "voucher", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'voucher_validity', length: 250 }),
    __metadata("design:type", String)
], TblApplyVoucher.prototype, "voucherValidity", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'status' }),
    __metadata("design:type", Number)
], TblApplyVoucher.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'create_time',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblApplyVoucher.prototype, "createTime", void 0);
exports.TblApplyVoucher = TblApplyVoucher = __decorate([
    (0, typeorm_1.Entity)('tbl_apply_voucher', { schema: 'teesas' })
], TblApplyVoucher);
//# sourceMappingURL=TblApplyVoucher.js.map