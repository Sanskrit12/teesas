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
exports.TblTabletVoucherUsed = void 0;
const typeorm_1 = require("typeorm");
let TblTabletVoucherUsed = class TblTabletVoucherUsed {
};
exports.TblTabletVoucherUsed = TblTabletVoucherUsed;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblTabletVoucherUsed.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblTabletVoucherUsed.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', length: 50 }),
    __metadata("design:type", String)
], TblTabletVoucherUsed.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblTabletVoucherUsed.prototype, "timestamp", void 0);
exports.TblTabletVoucherUsed = TblTabletVoucherUsed = __decorate([
    (0, typeorm_1.Entity)('tbl_tablet_voucher_used', { schema: 'teesas' })
], TblTabletVoucherUsed);
//# sourceMappingURL=TblTabletVoucherUsed.js.map