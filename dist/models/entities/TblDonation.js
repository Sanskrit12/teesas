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
exports.TblDonation = void 0;
const typeorm_1 = require("typeorm");
let TblDonation = class TblDonation {
};
exports.TblDonation = TblDonation;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], TblDonation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], TblDonation.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', length: 255 }),
    __metadata("design:type", String)
], TblDonation.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'phone_no', length: 255 }),
    __metadata("design:type", String)
], TblDonation.prototype, "phoneNo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country', length: 255 }),
    __metadata("design:type", String)
], TblDonation.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'delivery_type', length: 255 }),
    __metadata("design:type", String)
], TblDonation.prototype, "deliveryType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'pickup_country', length: 255 }),
    __metadata("design:type", String)
], TblDonation.prototype, "pickupCountry", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'pickup_email', length: 255 }),
    __metadata("design:type", String)
], TblDonation.prototype, "pickupEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'pickup_phone_no', length: 255 }),
    __metadata("design:type", String)
], TblDonation.prototype, "pickupPhoneNo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'device_brand', length: 255 }),
    __metadata("design:type", String)
], TblDonation.prototype, "deviceBrand", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'model', length: 255 }),
    __metadata("design:type", String)
], TblDonation.prototype, "model", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'opearting_system', length: 255 }),
    __metadata("design:type", String)
], TblDonation.prototype, "opeartingSystem", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'image1' }),
    __metadata("design:type", String)
], TblDonation.prototype, "image1", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'image2' }),
    __metadata("design:type", String)
], TblDonation.prototype, "image2", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], TblDonation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], TblDonation.prototype, "updatedAt", void 0);
exports.TblDonation = TblDonation = __decorate([
    (0, typeorm_1.Entity)('tbl_donation', { schema: 'teesas' })
], TblDonation);
//# sourceMappingURL=TblDonation.js.map