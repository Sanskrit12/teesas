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
exports.TblEbook = void 0;
const typeorm_1 = require("typeorm");
let TblEbook = class TblEbook {
};
exports.TblEbook = TblEbook;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblEbook.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'subject_id' }),
    __metadata("design:type", Number)
], TblEbook.prototype, "subjectId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 255 }),
    __metadata("design:type", String)
], TblEbook.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'dsecription', nullable: true }),
    __metadata("design:type", String)
], TblEbook.prototype, "dsecription", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'short_des', length: 255 }),
    __metadata("design:type", String)
], TblEbook.prototype, "shortDes", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'icon', length: 255 }),
    __metadata("design:type", String)
], TblEbook.prototype, "icon", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'source', length: 255 }),
    __metadata("design:type", String)
], TblEbook.prototype, "source", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sample_source', length: 255 }),
    __metadata("design:type", String)
], TblEbook.prototype, "sampleSource", void 0);
__decorate([
    (0, typeorm_1.Column)('float', { name: 'price', nullable: true, precision: 12 }),
    __metadata("design:type", Number)
], TblEbook.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'discount', default: '0' }),
    __metadata("design:type", Number)
], TblEbook.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'seo', length: 255 }),
    __metadata("design:type", String)
], TblEbook.prototype, "seo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'publisher', nullable: true, length: 11 }),
    __metadata("design:type", String)
], TblEbook.prototype, "publisher", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'publication', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblEbook.prototype, "publication", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ISBN_no', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblEbook.prototype, "isbnNo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_id', length: 255 }),
    __metadata("design:type", String)
], TblEbook.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'course_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblEbook.prototype, "courseId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'language', length: 11 }),
    __metadata("design:type", String)
], TblEbook.prototype, "language", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'publish_date',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblEbook.prototype, "publishDate", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'status', nullable: true }),
    __metadata("design:type", Number)
], TblEbook.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('tinyint', { name: 'is_paid', width: 1 }),
    __metadata("design:type", Boolean)
], TblEbook.prototype, "isPaid", void 0);
exports.TblEbook = TblEbook = __decorate([
    (0, typeorm_1.Index)('seo', ['seo'], { fulltext: true }),
    (0, typeorm_1.Entity)('tbl_ebook', { schema: 'teesas' })
], TblEbook);
//# sourceMappingURL=TblEbook.js.map