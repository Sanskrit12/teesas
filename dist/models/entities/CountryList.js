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
exports.CountryList = void 0;
const typeorm_1 = require("typeorm");
let CountryList = class CountryList {
};
exports.CountryList = CountryList;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], CountryList.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country', nullable: true, length: 100 }),
    __metadata("design:type", String)
], CountryList.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_code', length: 255 }),
    __metadata("design:type", String)
], CountryList.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'dialing_code', nullable: true, length: 255 }),
    __metadata("design:type", String)
], CountryList.prototype, "dialingCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'currency', nullable: true, length: 100 }),
    __metadata("design:type", String)
], CountryList.prototype, "currency", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', nullable: true, length: 100 }),
    __metadata("design:type", String)
], CountryList.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'symbol', nullable: true, length: 100 }),
    __metadata("design:type", String)
], CountryList.prototype, "symbol", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'price_rate', length: 255 }),
    __metadata("design:type", String)
], CountryList.prototype, "priceRate", void 0);
exports.CountryList = CountryList = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Entity)('country_list', { schema: 'teesas' })
], CountryList);
//# sourceMappingURL=CountryList.js.map