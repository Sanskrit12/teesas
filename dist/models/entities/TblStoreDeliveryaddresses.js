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
exports.TblStoreDeliveryaddresses = void 0;
const typeorm_1 = require("typeorm");
let TblStoreDeliveryaddresses = class TblStoreDeliveryaddresses {
};
exports.TblStoreDeliveryaddresses = TblStoreDeliveryaddresses;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], TblStoreDeliveryaddresses.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'user_id' }),
    __metadata("design:type", String)
], TblStoreDeliveryaddresses.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'country_id' }),
    __metadata("design:type", String)
], TblStoreDeliveryaddresses.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'state_id' }),
    __metadata("design:type", String)
], TblStoreDeliveryaddresses.prototype, "stateId", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'city_id' }),
    __metadata("design:type", String)
], TblStoreDeliveryaddresses.prototype, "cityId", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'address' }),
    __metadata("design:type", String)
], TblStoreDeliveryaddresses.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], TblStoreDeliveryaddresses.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], TblStoreDeliveryaddresses.prototype, "updatedAt", void 0);
exports.TblStoreDeliveryaddresses = TblStoreDeliveryaddresses = __decorate([
    (0, typeorm_1.Entity)('tbl_store_deliveryaddresses', { schema: 'teesas' })
], TblStoreDeliveryaddresses);
//# sourceMappingURL=TblStoreDeliveryaddresses.js.map