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
exports.TblChapter = void 0;
const typeorm_1 = require("typeorm");
const TblSubjects_1 = require("./TblSubjects");
let TblChapter = class TblChapter {
};
exports.TblChapter = TblChapter;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblChapter.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblSubjects_1.TblSubjects, (subjects) => subjects.chapters, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'subject_id' }),
    __metadata("design:type", TblSubjects_1.TblSubjects)
], TblChapter.prototype, "subjects", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'chapter_name', length: 255 }),
    __metadata("design:type", String)
], TblChapter.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 's_no', nullable: true }),
    __metadata("design:type", Number)
], TblChapter.prototype, "sNo", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblChapter.prototype, "created", void 0);
exports.TblChapter = TblChapter = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('s_no', ['sNo'], {}),
    (0, typeorm_1.Entity)('tbl_chapter', { schema: 'teesas' })
], TblChapter);
//# sourceMappingURL=TblChapter.js.map