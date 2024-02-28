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
exports.Cities = void 0;
const typeorm_1 = require("typeorm");
const States_1 = require("./States");
let Cities = class Cities {
};
exports.Cities = Cities;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], Cities.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'state_id', unsigned: true }),
    __metadata("design:type", String)
], Cities.prototype, "stateId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], Cities.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'shipping_price',
        nullable: true,
        precision: 10,
        scale: 2,
    }),
    __metadata("design:type", String)
], Cities.prototype, "shippingPrice", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', {
        name: 'default_shipping_price',
        nullable: true,
        precision: 10,
        scale: 2,
    }),
    __metadata("design:type", String)
], Cities.prototype, "defaultShippingPrice", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'status',
        enum: ['active', 'inactive'],
        default: 'active',
    }),
    __metadata("design:type", String)
], Cities.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Cities.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'updated_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], Cities.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'deleted_at', nullable: true }),
    __metadata("design:type", Date)
], Cities.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => States_1.States, (states) => states.cities, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'state_id', referencedColumnName: 'id' }]),
    __metadata("design:type", States_1.States)
], Cities.prototype, "state", void 0);
exports.Cities = Cities = __decorate([
    (0, typeorm_1.Index)('cities_state_id_foreign', ['stateId'], {}),
    (0, typeorm_1.Entity)('cities', { schema: 'teesas' })
], Cities);
//# sourceMappingURL=Cities.js.map