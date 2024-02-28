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
exports.TblSalesUser = void 0;
const typeorm_1 = require("typeorm");
let TblSalesUser = class TblSalesUser {
};
exports.TblSalesUser = TblSalesUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblSalesUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sale_code', length: 255 }),
    __metadata("design:type", String)
], TblSalesUser.prototype, "saleCode", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblSalesUser.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], TblSalesUser.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'category', length: 255 }),
    __metadata("design:type", String)
], TblSalesUser.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account_number', length: 255 }),
    __metadata("design:type", String)
], TblSalesUser.prototype, "accountNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'bank', length: 255 }),
    __metadata("design:type", String)
], TblSalesUser.prototype, "bank", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_name', length: 255 }),
    __metadata("design:type", String)
], TblSalesUser.prototype, "countryName", void 0);
exports.TblSalesUser = TblSalesUser = __decorate([
    (0, typeorm_1.Entity)('tbl_sales_user', { schema: 'teesas' })
], TblSalesUser);
//# sourceMappingURL=TblSalesUser.js.map