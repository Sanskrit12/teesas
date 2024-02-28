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
exports.Addstores = void 0;
const typeorm_1 = require("typeorm");
let Addstores = class Addstores {
};
exports.Addstores = Addstores;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], Addstores.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'ip_address', nullable: true }),
    __metadata("design:type", String)
], Addstores.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'user_id', nullable: true }),
    __metadata("design:type", String)
], Addstores.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'product_id' }),
    __metadata("design:type", String)
], Addstores.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'total_quentity' }),
    __metadata("design:type", String)
], Addstores.prototype, "totalQuentity", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'class_id' }),
    __metadata("design:type", String)
], Addstores.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'color_id' }),
    __metadata("design:type", String)
], Addstores.prototype, "colorId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'type', length: 255 }),
    __metadata("design:type", String)
], Addstores.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'status', width: 1 }),
    __metadata("design:type", Boolean)
], Addstores.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Addstores.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Addstores.prototype, "updatedAt", void 0);
exports.Addstores = Addstores = __decorate([
    (0, typeorm_1.Entity)('addstores', { schema: 'teesas' })
], Addstores);
//# sourceMappingURL=Addstores.js.map