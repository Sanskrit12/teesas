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
exports.TblSubjects = void 0;
const typeorm_1 = require("typeorm");
let TblSubjects = class TblSubjects {
};
exports.TblSubjects = TblSubjects;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblSubjects.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], TblSubjects.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'class_id', length: 255 }),
    __metadata("design:type", String)
], TblSubjects.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'icon_id', length: 255 }),
    __metadata("design:type", String)
], TblSubjects.prototype, "iconId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'color_code_gradiant', length: 255 }),
    __metadata("design:type", String)
], TblSubjects.prototype, "colorCodeGradiant", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'color_plat_id', length: 255 }),
    __metadata("design:type", String)
], TblSubjects.prototype, "colorPlatId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 's_no' }),
    __metadata("design:type", Number)
], TblSubjects.prototype, "sNo", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblSubjects.prototype, "created", void 0);
exports.TblSubjects = TblSubjects = __decorate([
    (0, typeorm_1.Index)('class_id', ['classId'], {}),
    (0, typeorm_1.Index)('color_plat_id', ['colorPlatId'], {}),
    (0, typeorm_1.Index)('icon_id', ['iconId'], {}),
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('s_no', ['sNo'], {}),
    (0, typeorm_1.Entity)('tbl_subjects', { schema: 'teesas' })
], TblSubjects);
//# sourceMappingURL=TblSubjects.js.map