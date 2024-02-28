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
exports.TblAddUserSubscription = void 0;
const typeorm_1 = require("typeorm");
let TblAddUserSubscription = class TblAddUserSubscription {
};
exports.TblAddUserSubscription = TblAddUserSubscription;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblAddUserSubscription.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblAddUserSubscription.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'transaction_id' }),
    __metadata("design:type", Number)
], TblAddUserSubscription.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'subscription_id' }),
    __metadata("design:type", Number)
], TblAddUserSubscription.prototype, "subscriptionId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'class_id_inapp' }),
    __metadata("design:type", Number)
], TblAddUserSubscription.prototype, "classIdInapp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'plan_id_inapp', length: 100 }),
    __metadata("design:type", String)
], TblAddUserSubscription.prototype, "planIdInapp", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'voucher_id', nullable: true }),
    __metadata("design:type", Number)
], TblAddUserSubscription.prototype, "voucherId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'device_id', length: 255 }),
    __metadata("design:type", String)
], TblAddUserSubscription.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'create_time',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblAddUserSubscription.prototype, "createTime", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'inapp_expire_time', length: 255 }),
    __metadata("design:type", String)
], TblAddUserSubscription.prototype, "inappExpireTime", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'cancel_subscription',
        enum: ['0', '1'],
        default: '0',
    }),
    __metadata("design:type", String)
], TblAddUserSubscription.prototype, "cancelSubscription", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'status', enum: ['0', '1'] }),
    __metadata("design:type", String)
], TblAddUserSubscription.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'is_deleted',
        enum: ['0', '1'],
        default: '0',
    }),
    __metadata("design:type", String)
], TblAddUserSubscription.prototype, "isDeleted", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'is_offline_payment', default: '0' }),
    __metadata("design:type", Number)
], TblAddUserSubscription.prototype, "isOfflinePayment", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'free_voucher_code', length: 50 }),
    __metadata("design:type", String)
], TblAddUserSubscription.prototype, "freeVoucherCode", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'is_inapp_purchase',
        comment: '0 = others 1 = inapp',
    }),
    __metadata("design:type", Number)
], TblAddUserSubscription.prototype, "isInappPurchase", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'is_manually_payment', default: '0' }),
    __metadata("design:type", Number)
], TblAddUserSubscription.prototype, "isManuallyPayment", void 0);
exports.TblAddUserSubscription = TblAddUserSubscription = __decorate([
    (0, typeorm_1.Entity)('tbl_add_user_subscription', { schema: 'teesas' })
], TblAddUserSubscription);
//# sourceMappingURL=TblAddUserSubscription.js.map