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
exports.TblLiveclass = void 0;
const typeorm_1 = require("typeorm");
let TblLiveclass = class TblLiveclass {
};
exports.TblLiveclass = TblLiveclass;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblLiveclass.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'subject_id' }),
    __metadata("design:type", Number)
], TblLiveclass.prototype, "subjectId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'live_class_video', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "liveClassVideo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'display_time', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "displayTime", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'class_end_time', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "classEndTime", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'cls_start_time', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "clsStartTime", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'cls_end_time', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "clsEndTime", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'banner', length: 250 }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "banner", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'description' }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 255 }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'seat' }),
    __metadata("design:type", Number)
], TblLiveclass.prototype, "seat", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'time', length: 255 }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)('date', { name: 'date' }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'class_time', length: 250 }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "classTime", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'teacher_id', nullable: true }),
    __metadata("design:type", Number)
], TblLiveclass.prototype, "teacherId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_id', length: 255 }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'link', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "link", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'status', enum: ['0', '1'] }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'is_heighlight', nullable: true, enum: ['0', '1'] }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "isHeighlight", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'teacher_start',
        enum: ['0', '1'],
        default: '0',
    }),
    __metadata("design:type", String)
], TblLiveclass.prototype, "teacherStart", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_date',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblLiveclass.prototype, "createdDate", void 0);
exports.TblLiveclass = TblLiveclass = __decorate([
    (0, typeorm_1.Index)('country_id', ['countryId'], {}),
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('subject_id', ['subjectId'], {}),
    (0, typeorm_1.Index)('teacher_id', ['teacherId'], {}),
    (0, typeorm_1.Entity)('tbl_liveclass', { schema: 'teesas' })
], TblLiveclass);
//# sourceMappingURL=TblLiveclass.js.map