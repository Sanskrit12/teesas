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
exports.OrderDetails = void 0;
const typeorm_1 = require("typeorm");
let OrderDetails = class OrderDetails {
};
exports.OrderDetails = OrderDetails;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], OrderDetails.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'ip_address', nullable: true }),
    __metadata("design:type", String)
], OrderDetails.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'user_id', nullable: true }),
    __metadata("design:type", String)
], OrderDetails.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'product_id' }),
    __metadata("design:type", String)
], OrderDetails.prototype, "productId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'class_id' }),
    __metadata("design:type", String)
], OrderDetails.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'order_id' }),
    __metadata("design:type", String)
], OrderDetails.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'discount' }),
    __metadata("design:type", String)
], OrderDetails.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { name: 'price', precision: 10, scale: 2 }),
    __metadata("design:type", String)
], OrderDetails.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'status', width: 1 }),
    __metadata("design:type", Boolean)
], OrderDetails.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'quantity' }),
    __metadata("design:type", String)
], OrderDetails.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'color_id' }),
    __metadata("design:type", String)
], OrderDetails.prototype, "colorId", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], OrderDetails.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], OrderDetails.prototype, "updatedAt", void 0);
exports.OrderDetails = OrderDetails = __decorate([
    (0, typeorm_1.Entity)('order_details', { schema: 'teesas' })
], OrderDetails);
//# sourceMappingURL=OrderDetails.js.map