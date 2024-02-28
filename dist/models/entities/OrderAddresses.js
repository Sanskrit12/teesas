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
exports.OrderAddresses = void 0;
const typeorm_1 = require("typeorm");
let OrderAddresses = class OrderAddresses {
};
exports.OrderAddresses = OrderAddresses;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], OrderAddresses.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'userinformation_id', nullable: true }),
    __metadata("design:type", String)
], OrderAddresses.prototype, "userinformationId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'user_id', nullable: true }),
    __metadata("design:type", String)
], OrderAddresses.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'type' }),
    __metadata("design:type", String)
], OrderAddresses.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'order_id' }),
    __metadata("design:type", String)
], OrderAddresses.prototype, "orderId", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'status', width: 1 }),
    __metadata("design:type", Boolean)
], OrderAddresses.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'address', nullable: true }),
    __metadata("design:type", String)
], OrderAddresses.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'address_id' }),
    __metadata("design:type", String)
], OrderAddresses.prototype, "addressId", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], OrderAddresses.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], OrderAddresses.prototype, "updatedAt", void 0);
exports.OrderAddresses = OrderAddresses = __decorate([
    (0, typeorm_1.Entity)('order_addresses', { schema: 'teesas' })
], OrderAddresses);
//# sourceMappingURL=OrderAddresses.js.map