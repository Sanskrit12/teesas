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
exports.TblTest = void 0;
const typeorm_1 = require("typeorm");
let TblTest = class TblTest {
};
exports.TblTest = TblTest;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblTest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'test_name', length: 255 }),
    __metadata("design:type", String)
], TblTest.prototype, "testName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'test_type', length: 255 }),
    __metadata("design:type", String)
], TblTest.prototype, "testType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'chapter_id', length: 255 }),
    __metadata("design:type", String)
], TblTest.prototype, "chapterId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'question_count', length: 255 }),
    __metadata("design:type", String)
], TblTest.prototype, "questionCount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'time', length: 255 }),
    __metadata("design:type", String)
], TblTest.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'instruction' }),
    __metadata("design:type", String)
], TblTest.prototype, "instruction", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'status', enum: ['0', '1'] }),
    __metadata("design:type", String)
], TblTest.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblTest.prototype, "created", void 0);
exports.TblTest = TblTest = __decorate([
    (0, typeorm_1.Index)('chapter_id', ['chapterId'], {}),
    (0, typeorm_1.Index)('test_type', ['testType'], {}),
    (0, typeorm_1.Entity)('tbl_test', { schema: 'teesas' })
], TblTest);
//# sourceMappingURL=TblTest.js.map