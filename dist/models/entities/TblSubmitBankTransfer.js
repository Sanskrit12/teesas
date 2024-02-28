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
exports.TblSubmitBankTransfer = void 0;
const typeorm_1 = require("typeorm");
let TblSubmitBankTransfer = class TblSubmitBankTransfer {
};
exports.TblSubmitBankTransfer = TblSubmitBankTransfer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblSubmitBankTransfer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblSubmitBankTransfer.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'file_image' }),
    __metadata("design:type", String)
], TblSubmitBankTransfer.prototype, "fileImage", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'plan_id', length: 255 }),
    __metadata("design:type", String)
], TblSubmitBankTransfer.prototype, "planId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'subscription_id', length: 255 }),
    __metadata("design:type", String)
], TblSubmitBankTransfer.prototype, "subscriptionId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'amount' }),
    __metadata("design:type", Number)
], TblSubmitBankTransfer.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'device_id', length: 255 }),
    __metadata("design:type", String)
], TblSubmitBankTransfer.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'timestamp',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblSubmitBankTransfer.prototype, "timestamp", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'status',
        comment: '0- pending , 1- approved , 2 - rejected',
        width: 1,
    }),
    __metadata("design:type", Boolean)
], TblSubmitBankTransfer.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'admin_id', nullable: true }),
    __metadata("design:type", Number)
], TblSubmitBankTransfer.prototype, "adminId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sales_code', nullable: true, length: 45 }),
    __metadata("design:type", String)
], TblSubmitBankTransfer.prototype, "salesCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'bank_id', nullable: true, length: 45 }),
    __metadata("design:type", String)
], TblSubmitBankTransfer.prototype, "bankId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account_holder', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblSubmitBankTransfer.prototype, "accountHolder", void 0);
exports.TblSubmitBankTransfer = TblSubmitBankTransfer = __decorate([
    (0, typeorm_1.Entity)('tbl_submit_bank_transfer', { schema: 'teesas' })
], TblSubmitBankTransfer);
//# sourceMappingURL=TblSubmitBankTransfer.js.map