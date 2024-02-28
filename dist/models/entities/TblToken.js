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
exports.TblToken = void 0;
const typeorm_1 = require("typeorm");
let TblToken = class TblToken {
};
exports.TblToken = TblToken;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblToken.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'device_id', length: 255 }),
    __metadata("design:type", String)
], TblToken.prototype, "deviceId", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'token' }),
    __metadata("design:type", String)
], TblToken.prototype, "token", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'is_logout', enum: ['0', '1'], default: '0' }),
    __metadata("design:type", String)
], TblToken.prototype, "isLogout", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblToken.prototype, "userId", void 0);
exports.TblToken = TblToken = __decorate([
    (0, typeorm_1.Index)('device_id', ['deviceId'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_token', { schema: 'teesas' })
], TblToken);
//# sourceMappingURL=TblToken.js.map