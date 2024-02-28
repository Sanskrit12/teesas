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
exports.TblUserAddress = void 0;
const typeorm_1 = require("typeorm");
let TblUserAddress = class TblUserAddress {
};
exports.TblUserAddress = TblUserAddress;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblUserAddress.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblUserAddress.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'name' }),
    __metadata("design:type", Number)
], TblUserAddress.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', length: 250 }),
    __metadata("design:type", String)
], TblUserAddress.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'phone_no' }),
    __metadata("design:type", Number)
], TblUserAddress.prototype, "phoneNo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'address', length: 250 }),
    __metadata("design:type", String)
], TblUserAddress.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country', length: 250 }),
    __metadata("design:type", String)
], TblUserAddress.prototype, "country", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'city', length: 250 }),
    __metadata("design:type", String)
], TblUserAddress.prototype, "city", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'post_code', length: 250 }),
    __metadata("design:type", String)
], TblUserAddress.prototype, "postCode", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created' }),
    __metadata("design:type", Date)
], TblUserAddress.prototype, "created", void 0);
exports.TblUserAddress = TblUserAddress = __decorate([
    (0, typeorm_1.Index)('country', ['country'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_user_address', { schema: 'teesas' })
], TblUserAddress);
//# sourceMappingURL=TblUserAddress.js.map