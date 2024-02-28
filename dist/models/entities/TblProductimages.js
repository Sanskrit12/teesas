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
exports.TblProductimages = void 0;
const typeorm_1 = require("typeorm");
let TblProductimages = class TblProductimages {
};
exports.TblProductimages = TblProductimages;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], TblProductimages.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'color_id' }),
    __metadata("design:type", String)
], TblProductimages.prototype, "colorId", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'product_id', nullable: true }),
    __metadata("design:type", String)
], TblProductimages.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'image' }),
    __metadata("design:type", String)
], TblProductimages.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], TblProductimages.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], TblProductimages.prototype, "updatedAt", void 0);
exports.TblProductimages = TblProductimages = __decorate([
    (0, typeorm_1.Entity)('tbl__productimages', { schema: 'teesas' })
], TblProductimages);
//# sourceMappingURL=TblProductimages.js.map