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
exports.TblTabletVoucher = void 0;
const typeorm_1 = require("typeorm");
let TblTabletVoucher = class TblTabletVoucher {
};
exports.TblTabletVoucher = TblTabletVoucher;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblTabletVoucher.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', length: 250 }),
    __metadata("design:type", String)
], TblTabletVoucher.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id', nullable: true }),
    __metadata("design:type", Number)
], TblTabletVoucher.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'validity', length: 250 }),
    __metadata("design:type", String)
], TblTabletVoucher.prototype, "validity", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'status',
        comment: '0- not_used , 1 - is_used,',
        enum: ['0', '1'],
        default: '0',
    }),
    __metadata("design:type", String)
], TblTabletVoucher.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'code_used_date',
        comment: 'code used date ',
        length: 250,
    }),
    __metadata("design:type", String)
], TblTabletVoucher.prototype, "codeUsedDate", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblTabletVoucher.prototype, "created", void 0);
exports.TblTabletVoucher = TblTabletVoucher = __decorate([
    (0, typeorm_1.Entity)('tbl_tablet_voucher', { schema: 'teesas' })
], TblTabletVoucher);
//# sourceMappingURL=TblTabletVoucher.js.map