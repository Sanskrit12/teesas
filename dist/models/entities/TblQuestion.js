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
exports.TblQuestion = void 0;
const typeorm_1 = require("typeorm");
let TblQuestion = class TblQuestion {
};
exports.TblQuestion = TblQuestion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblQuestion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'practice_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblQuestion.prototype, "practiceId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'test_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblQuestion.prototype, "testId", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'question' }),
    __metadata("design:type", String)
], TblQuestion.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'question_image', length: 255 }),
    __metadata("design:type", String)
], TblQuestion.prototype, "questionImage", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'level', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblQuestion.prototype, "level", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblQuestion.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'is_flag', enum: ['0', '1'], default: '0' }),
    __metadata("design:type", String)
], TblQuestion.prototype, "isFlag", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'topic_id', length: 255 }),
    __metadata("design:type", String)
], TblQuestion.prototype, "topicId", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'solution' }),
    __metadata("design:type", String)
], TblQuestion.prototype, "solution", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'solution_image', length: 255 }),
    __metadata("design:type", String)
], TblQuestion.prototype, "solutionImage", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'hint' }),
    __metadata("design:type", String)
], TblQuestion.prototype, "hint", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'hint_image', length: 255 }),
    __metadata("design:type", String)
], TblQuestion.prototype, "hintImage", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'answer' }),
    __metadata("design:type", Number)
], TblQuestion.prototype, "answer", void 0);
exports.TblQuestion = TblQuestion = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('practice_id', ['practiceId'], {}),
    (0, typeorm_1.Index)('question', ['question'], { fulltext: true }),
    (0, typeorm_1.Index)('test_id', ['testId'], {}),
    (0, typeorm_1.Index)('topic_id', ['topicId'], {}),
    (0, typeorm_1.Entity)('tbl_question', { schema: 'teesas' })
], TblQuestion);
//# sourceMappingURL=TblQuestion.js.map