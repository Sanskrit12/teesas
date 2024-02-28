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
exports.Orders = void 0;
const typeorm_1 = require("typeorm");
let Orders = class Orders {
};
exports.Orders = Orders;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], Orders.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'ip_address', nullable: true }),
    __metadata("design:type", String)
], Orders.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'user_id', nullable: true }),
    __metadata("design:type", String)
], Orders.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'transection', length: 255 }),
    __metadata("design:type", String)
], Orders.prototype, "transection", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'tx_ref', length: 255 }),
    __metadata("design:type", String)
], Orders.prototype, "txRef", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'transection_type', length: 255 }),
    __metadata("design:type", String)
], Orders.prototype, "transectionType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'image_link', length: 255 }),
    __metadata("design:type", String)
], Orders.prototype, "imageLink", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'account_id', length: 255 }),
    __metadata("design:type", String)
], Orders.prototype, "accountId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'customer_id', length: 255 }),
    __metadata("design:type", String)
], Orders.prototype, "customerId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'response', length: 255 }),
    __metadata("design:type", String)
], Orders.prototype, "response", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'status', width: 1 }),
    __metadata("design:type", Boolean)
], Orders.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'amount' }),
    __metadata("design:type", String)
], Orders.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], Orders.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], Orders.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'holder_name', nullable: true, length: 255 }),
    __metadata("design:type", String)
], Orders.prototype, "holderName", void 0);
exports.Orders = Orders = __decorate([
    (0, typeorm_1.Entity)('orders', { schema: 'teesas' })
], Orders);
//# sourceMappingURL=Orders.js.map