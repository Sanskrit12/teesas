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
exports.TblQuestionTestHistory = void 0;
const typeorm_1 = require("typeorm");
let TblQuestionTestHistory = class TblQuestionTestHistory {
};
exports.TblQuestionTestHistory = TblQuestionTestHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblQuestionTestHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'test_id' }),
    __metadata("design:type", Number)
], TblQuestionTestHistory.prototype, "testId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'question_id' }),
    __metadata("design:type", Number)
], TblQuestionTestHistory.prototype, "questionId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'option_id' }),
    __metadata("design:type", Number)
], TblQuestionTestHistory.prototype, "optionId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'is_correct_key' }),
    __metadata("design:type", Number)
], TblQuestionTestHistory.prototype, "isCorrectKey", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'time', length: 255 }),
    __metadata("design:type", String)
], TblQuestionTestHistory.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblQuestionTestHistory.prototype, "userId", void 0);
exports.TblQuestionTestHistory = TblQuestionTestHistory = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('option_id', ['optionId'], {}),
    (0, typeorm_1.Index)('question_id', ['questionId'], {}),
    (0, typeorm_1.Index)('test_id', ['testId'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_question_test_history', { schema: 'teesas' })
], TblQuestionTestHistory);
//# sourceMappingURL=TblQuestionTestHistory.js.map