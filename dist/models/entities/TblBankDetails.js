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
exports.TblBankDetails = void 0;
const typeorm_1 = require("typeorm");
let TblBankDetails = class TblBankDetails {
};
exports.TblBankDetails = TblBankDetails;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblBankDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'bank_name', length: 255 }),
    __metadata("design:type", String)
], TblBankDetails.prototype, "bankName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account_number', length: 255 }),
    __metadata("design:type", String)
], TblBankDetails.prototype, "accountNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'bankcode', length: 255 }),
    __metadata("design:type", String)
], TblBankDetails.prototype, "bankcode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account_name', length: 255 }),
    __metadata("design:type", String)
], TblBankDetails.prototype, "accountName", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'Description' }),
    __metadata("design:type", String)
], TblBankDetails.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', {
        name: 'status',
        comment: '0- Not Publish , 1- Publish',
        default: () => "'1'",
    }),
    __metadata("design:type", Number)
], TblBankDetails.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_id', length: 15 }),
    __metadata("design:type", String)
], TblBankDetails.prototype, "countryId", void 0);
exports.TblBankDetails = TblBankDetails = __decorate([
    (0, typeorm_1.Entity)('tbl_bank_details', { schema: 'teesas' })
], TblBankDetails);
//# sourceMappingURL=TblBankDetails.js.map