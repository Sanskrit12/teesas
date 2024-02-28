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
exports.TblStoreHomebanner = void 0;
const typeorm_1 = require("typeorm");
let TblStoreHomebanner = class TblStoreHomebanner {
};
exports.TblStoreHomebanner = TblStoreHomebanner;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], TblStoreHomebanner.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 255 }),
    __metadata("design:type", String)
], TblStoreHomebanner.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', length: 255 }),
    __metadata("design:type", String)
], TblStoreHomebanner.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'image' }),
    __metadata("design:type", String)
], TblStoreHomebanner.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'display' }),
    __metadata("design:type", String)
], TblStoreHomebanner.prototype, "display", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'network' }),
    __metadata("design:type", String)
], TblStoreHomebanner.prototype, "network", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'memory' }),
    __metadata("design:type", String)
], TblStoreHomebanner.prototype, "memory", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], TblStoreHomebanner.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], TblStoreHomebanner.prototype, "updatedAt", void 0);
exports.TblStoreHomebanner = TblStoreHomebanner = __decorate([
    (0, typeorm_1.Entity)('tbl_store_homebanner', { schema: 'teesas' })
], TblStoreHomebanner);
//# sourceMappingURL=TblStoreHomebanner.js.map