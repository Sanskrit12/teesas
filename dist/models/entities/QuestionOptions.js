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
exports.QuestionOptions = void 0;
const typeorm_1 = require("typeorm");
let QuestionOptions = class QuestionOptions {
};
exports.QuestionOptions = QuestionOptions;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], QuestionOptions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'question' }),
    __metadata("design:type", Number)
], QuestionOptions.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'option' }),
    __metadata("design:type", String)
], QuestionOptions.prototype, "option", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'option_image', length: 255 }),
    __metadata("design:type", String)
], QuestionOptions.prototype, "optionImage", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'is_correct_ans_key',
        nullable: true,
        length: 255,
    }),
    __metadata("design:type", String)
], QuestionOptions.prototype, "isCorrectAnsKey", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], QuestionOptions.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'test_id', nullable: true }),
    __metadata("design:type", Number)
], QuestionOptions.prototype, "testId", void 0);
exports.QuestionOptions = QuestionOptions = __decorate([
    (0, typeorm_1.Entity)('question_options', { schema: 'teesas' })
], QuestionOptions);
//# sourceMappingURL=QuestionOptions.js.map