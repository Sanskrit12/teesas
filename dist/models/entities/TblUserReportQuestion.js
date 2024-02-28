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
exports.TblUserReportQuestion = void 0;
const typeorm_1 = require("typeorm");
let TblUserReportQuestion = class TblUserReportQuestion {
};
exports.TblUserReportQuestion = TblUserReportQuestion;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblUserReportQuestion.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblUserReportQuestion.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'question_id' }),
    __metadata("design:type", Number)
], TblUserReportQuestion.prototype, "questionId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'report_id' }),
    __metadata("design:type", Number)
], TblUserReportQuestion.prototype, "reportId", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'create_time',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblUserReportQuestion.prototype, "createTime", void 0);
exports.TblUserReportQuestion = TblUserReportQuestion = __decorate([
    (0, typeorm_1.Index)('question_id', ['questionId'], {}),
    (0, typeorm_1.Index)('report_id', ['reportId'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_user_report_question', { schema: 'teesas' })
], TblUserReportQuestion);
//# sourceMappingURL=TblUserReportQuestion.js.map