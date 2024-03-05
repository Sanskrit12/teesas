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
exports.TblClassStandard = void 0;
const typeorm_1 = require("typeorm");
const TblCourses_1 = require("./TblCourses");
const TblSubjects_1 = require("./TblSubjects");
let TblClassStandard = class TblClassStandard {
};
exports.TblClassStandard = TblClassStandard;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblClassStandard.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblCourses_1.TblCourses, (courses) => courses.class_standard, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'course_id' }),
    __metadata("design:type", TblCourses_1.TblCourses)
], TblClassStandard.prototype, "courses", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => TblSubjects_1.TblSubjects, (subjects) => subjects.class_standard),
    __metadata("design:type", TblSubjects_1.TblSubjects)
], TblClassStandard.prototype, "subjects", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], TblClassStandard.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblClassStandard.prototype, "created", void 0);
exports.TblClassStandard = TblClassStandard = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Entity)('tbl_class_standard', { schema: 'teesas' })
], TblClassStandard);
//# sourceMappingURL=TblClassStandard.js.map