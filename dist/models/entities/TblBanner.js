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
exports.TblBanner = void 0;
const typeorm_1 = require("typeorm");
let TblBanner = class TblBanner {
};
exports.TblBanner = TblBanner;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblBanner.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 255 }),
    __metadata("design:type", String)
], TblBanner.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'banner', length: 255 }),
    __metadata("design:type", String)
], TblBanner.prototype, "banner", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'description', nullable: true }),
    __metadata("design:type", String)
], TblBanner.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'type', length: 45, default: () => "'normal'" }),
    __metadata("design:type", String)
], TblBanner.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'priority' }),
    __metadata("design:type", Number)
], TblBanner.prototype, "priority", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'video_type', nullable: true, length: 225 }),
    __metadata("design:type", String)
], TblBanner.prototype, "videoType", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'video_url', nullable: true }),
    __metadata("design:type", String)
], TblBanner.prototype, "videoUrl", void 0);
exports.TblBanner = TblBanner = __decorate([
    (0, typeorm_1.Entity)('tbl_banner', { schema: 'teesas' })
], TblBanner);
//# sourceMappingURL=TblBanner.js.map