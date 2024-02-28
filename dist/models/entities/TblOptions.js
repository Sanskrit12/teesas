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
exports.TblOptions = void 0;
const typeorm_1 = require("typeorm");
let TblOptions = class TblOptions {
};
exports.TblOptions = TblOptions;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblOptions.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'question', length: 255 }),
    __metadata("design:type", String)
], TblOptions.prototype, "question", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'option1', nullable: true }),
    __metadata("design:type", String)
], TblOptions.prototype, "option1", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'option1_image', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblOptions.prototype, "option1Image", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'option2', nullable: true }),
    __metadata("design:type", String)
], TblOptions.prototype, "option2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'option2_image', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblOptions.prototype, "option2Image", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'option3', nullable: true }),
    __metadata("design:type", String)
], TblOptions.prototype, "option3", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'option3_image', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblOptions.prototype, "option3Image", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'option4', nullable: true }),
    __metadata("design:type", String)
], TblOptions.prototype, "option4", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'option4_image', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblOptions.prototype, "option4Image", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'solution', nullable: true }),
    __metadata("design:type", String)
], TblOptions.prototype, "solution", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'solution_image', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblOptions.prototype, "solutionImage", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'hint', nullable: true }),
    __metadata("design:type", String)
], TblOptions.prototype, "hint", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'hint_image', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblOptions.prototype, "hintImage", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblOptions.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'answer', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblOptions.prototype, "answer", void 0);
exports.TblOptions = TblOptions = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Entity)('tbl_options', { schema: 'teesas' })
], TblOptions);
//# sourceMappingURL=TblOptions.js.map