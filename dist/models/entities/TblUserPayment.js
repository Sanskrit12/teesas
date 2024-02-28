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
exports.TblUserPayment = void 0;
const typeorm_1 = require("typeorm");
let TblUserPayment = class TblUserPayment {
};
exports.TblUserPayment = TblUserPayment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblUserPayment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblUserPayment.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'transaction_id' }),
    __metadata("design:type", Number)
], TblUserPayment.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'amount', precision: 12 }),
    __metadata("design:type", Number)
], TblUserPayment.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_date',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblUserPayment.prototype, "createdDate", void 0);
exports.TblUserPayment = TblUserPayment = __decorate([
    (0, typeorm_1.Index)('transaction_id', ['transactionId'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_user_payment', { schema: 'teesas' })
], TblUserPayment);
//# sourceMappingURL=TblUserPayment.js.map