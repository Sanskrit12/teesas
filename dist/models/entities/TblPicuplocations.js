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
exports.TblPicuplocations = void 0;
const typeorm_1 = require("typeorm");
let TblPicuplocations = class TblPicuplocations {
};
exports.TblPicuplocations = TblPicuplocations;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], TblPicuplocations.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], TblPicuplocations.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'address', length: 255 }),
    __metadata("design:type", String)
], TblPicuplocations.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'phone_no', length: 255 }),
    __metadata("design:type", String)
], TblPicuplocations.prototype, "phoneNo", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'status',
        enum: ['active', 'inactive'],
        default: 'active',
    }),
    __metadata("design:type", String)
], TblPicuplocations.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], TblPicuplocations.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], TblPicuplocations.prototype, "updatedAt", void 0);
exports.TblPicuplocations = TblPicuplocations = __decorate([
    (0, typeorm_1.Entity)('tbl_picuplocations', { schema: 'teesas' })
], TblPicuplocations);
//# sourceMappingURL=TblPicuplocations.js.map