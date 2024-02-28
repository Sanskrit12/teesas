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
exports.TblQuestionPracticeHistory = void 0;
const typeorm_1 = require("typeorm");
let TblQuestionPracticeHistory = class TblQuestionPracticeHistory {
};
exports.TblQuestionPracticeHistory = TblQuestionPracticeHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], TblQuestionPracticeHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'practice_id', nullable: true }),
    __metadata("design:type", Number)
], TblQuestionPracticeHistory.prototype, "practiceId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'question_id', nullable: true }),
    __metadata("design:type", Number)
], TblQuestionPracticeHistory.prototype, "questionId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'option_id', nullable: true }),
    __metadata("design:type", Number)
], TblQuestionPracticeHistory.prototype, "optionId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'is_correct_key', nullable: true }),
    __metadata("design:type", Number)
], TblQuestionPracticeHistory.prototype, "isCorrectKey", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'time', length: 255 }),
    __metadata("design:type", String)
], TblQuestionPracticeHistory.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id', nullable: true }),
    __metadata("design:type", Number)
], TblQuestionPracticeHistory.prototype, "userId", void 0);
exports.TblQuestionPracticeHistory = TblQuestionPracticeHistory = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('option_id', ['optionId'], {}),
    (0, typeorm_1.Index)('practice_id', ['practiceId'], {}),
    (0, typeorm_1.Index)('question_id', ['questionId'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_question_practice_history', { schema: 'teesas' })
], TblQuestionPracticeHistory);
//# sourceMappingURL=TblQuestionPracticeHistory.js.map