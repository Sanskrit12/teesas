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
exports.TblNews = void 0;
const typeorm_1 = require("typeorm");
let TblNews = class TblNews {
};
exports.TblNews = TblNews;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblNews.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 255 }),
    __metadata("design:type", String)
], TblNews.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'class_id', nullable: true, default: '0' }),
    __metadata("design:type", Number)
], TblNews.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'source', length: 255 }),
    __metadata("design:type", String)
], TblNews.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'image', length: 255 }),
    __metadata("design:type", String)
], TblNews.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'description' }),
    __metadata("design:type", String)
], TblNews.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'class', nullable: true }),
    __metadata("design:type", Number)
], TblNews.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'date' }),
    __metadata("design:type", String)
], TblNews.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblNews.prototype, "created", void 0);
exports.TblNews = TblNews = __decorate([
    (0, typeorm_1.Entity)('tbl_news', { schema: 'teesas' })
], TblNews);
//# sourceMappingURL=TblNews.js.map