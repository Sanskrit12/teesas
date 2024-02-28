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
exports.Stores = void 0;
const typeorm_1 = require("typeorm");
let Stores = class Stores {
};
exports.Stores = Stores;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], Stores.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 255 }),
    __metadata("design:type", String)
], Stores.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'plan' }),
    __metadata("design:type", String)
], Stores.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'description' }),
    __metadata("design:type", String)
], Stores.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'short_description' }),
    __metadata("design:type", String)
], Stores.prototype, "shortDescription", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'product_description' }),
    __metadata("design:type", String)
], Stores.prototype, "productDescription", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'overview' }),
    __metadata("design:type", String)
], Stores.prototype, "overview", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'shipping_policy', nullable: true }),
    __metadata("design:type", String)
], Stores.prototype, "shippingPolicy", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'price', precision: 10, scale: 2 }),
    __metadata("design:type", String)
], Stores.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'discount', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Stores.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'image' }),
    __metadata("design:type", String)
], Stores.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'plan_id', length: 255 }),
    __metadata("design:type", String)
], Stores.prototype, "planId", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'status', width: 1 }),
    __metadata("design:type", Boolean)
], Stores.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'total_quentity', nullable: true }),
    __metadata("design:type", String)
], Stores.prototype, "totalQuentity", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'ip_address', nullable: true }),
    __metadata("design:type", String)
], Stores.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Stores.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Stores.prototype, "updatedAt", void 0);
exports.Stores = Stores = __decorate([
    (0, typeorm_1.Entity)('stores', { schema: 'teesas' })
], Stores);
//# sourceMappingURL=Stores.js.map