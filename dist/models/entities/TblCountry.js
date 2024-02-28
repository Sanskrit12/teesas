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
exports.TblCountry = void 0;
const typeorm_1 = require("typeorm");
let TblCountry = class TblCountry {
};
exports.TblCountry = TblCountry;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblCountry.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'iso', length: 2 }),
    __metadata("design:type", String)
], TblCountry.prototype, "iso", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 80 }),
    __metadata("design:type", String)
], TblCountry.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'nicename', length: 80 }),
    __metadata("design:type", String)
], TblCountry.prototype, "nicename", void 0);
__decorate([
    (0, typeorm_1.Column)('char', { name: 'iso3', nullable: true, length: 3 }),
    __metadata("design:type", String)
], TblCountry.prototype, "iso3", void 0);
__decorate([
    (0, typeorm_1.Column)('smallint', { name: 'numcode', nullable: true }),
    __metadata("design:type", Number)
], TblCountry.prototype, "numcode", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'phonecode' }),
    __metadata("design:type", Number)
], TblCountry.prototype, "phonecode", void 0);
exports.TblCountry = TblCountry = __decorate([
    (0, typeorm_1.Entity)('tbl_country', { schema: 'teesas' })
], TblCountry);
//# sourceMappingURL=TblCountry.js.map