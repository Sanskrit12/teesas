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
exports.TblVoucher = void 0;
const typeorm_1 = require("typeorm");
let TblVoucher = class TblVoucher {
};
exports.TblVoucher = TblVoucher;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblVoucher.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], TblVoucher.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', length: 255 }),
    __metadata("design:type", String)
], TblVoucher.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'validity', length: 255 }),
    __metadata("design:type", String)
], TblVoucher.prototype, "validity", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'discount', length: 255 }),
    __metadata("design:type", String)
], TblVoucher.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblVoucher.prototype, "created", void 0);
exports.TblVoucher = TblVoucher = __decorate([
    (0, typeorm_1.Entity)('tbl_voucher', { schema: 'teesas' })
], TblVoucher);
//# sourceMappingURL=TblVoucher.js.map