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
exports.TblTransaction = void 0;
const typeorm_1 = require("typeorm");
let TblTransaction = class TblTransaction {
};
exports.TblTransaction = TblTransaction;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblTransaction.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblTransaction.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'transaction_id', length: 255 }),
    __metadata("design:type", String)
], TblTransaction.prototype, "transactionId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'tx_ref', length: 255 }),
    __metadata("design:type", String)
], TblTransaction.prototype, "txRef", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'transaction_type', length: 255 }),
    __metadata("design:type", String)
], TblTransaction.prototype, "transactionType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account_id', length: 255 }),
    __metadata("design:type", String)
], TblTransaction.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'customer_id', length: 255 }),
    __metadata("design:type", String)
], TblTransaction.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'amount', precision: 12 }),
    __metadata("design:type", Number)
], TblTransaction.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_date',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblTransaction.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'row_response_json' }),
    __metadata("design:type", String)
], TblTransaction.prototype, "rowResponseJson", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'currency', length: 50 }),
    __metadata("design:type", String)
], TblTransaction.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'currency_symbol', length: 50 }),
    __metadata("design:type", String)
], TblTransaction.prototype, "currencySymbol", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'updated_date', length: 100 }),
    __metadata("design:type", String)
], TblTransaction.prototype, "updatedDate", void 0);
exports.TblTransaction = TblTransaction = __decorate([
    (0, typeorm_1.Index)('account_id', ['accountId'], {}),
    (0, typeorm_1.Index)('customer_id', ['customerId'], {}),
    (0, typeorm_1.Index)('transaction_id', ['transactionId'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_transaction', { schema: 'teesas' })
], TblTransaction);
//# sourceMappingURL=TblTransaction.js.map