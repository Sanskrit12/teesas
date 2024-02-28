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
exports.TblProductcolors = void 0;
const typeorm_1 = require("typeorm");
let TblProductcolors = class TblProductcolors {
};
exports.TblProductcolors = TblProductcolors;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], TblProductcolors.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'color' }),
    __metadata("design:type", String)
], TblProductcolors.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'product_id' }),
    __metadata("design:type", String)
], TblProductcolors.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'quantity' }),
    __metadata("design:type", String)
], TblProductcolors.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], TblProductcolors.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], TblProductcolors.prototype, "updatedAt", void 0);
exports.TblProductcolors = TblProductcolors = __decorate([
    (0, typeorm_1.Entity)('tbl__productcolors', { schema: 'teesas' })
], TblProductcolors);
//# sourceMappingURL=TblProductcolors.js.map