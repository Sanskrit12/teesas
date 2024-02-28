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
exports.TblUserTestHistory = void 0;
const typeorm_1 = require("typeorm");
let TblUserTestHistory = class TblUserTestHistory {
};
exports.TblUserTestHistory = TblUserTestHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblUserTestHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_id', length: 255 }),
    __metadata("design:type", String)
], TblUserTestHistory.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'test_submit_json' }),
    __metadata("design:type", String)
], TblUserTestHistory.prototype, "testSubmitJson", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'is_complete',
        enum: ['0', '1'],
        default: '0',
    }),
    __metadata("design:type", String)
], TblUserTestHistory.prototype, "isComplete", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblUserTestHistory.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'test_id', length: 255 }),
    __metadata("design:type", String)
], TblUserTestHistory.prototype, "testId", void 0);
exports.TblUserTestHistory = TblUserTestHistory = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('is_complete', ['isComplete'], {}),
    (0, typeorm_1.Index)('test_id', ['testId'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_user_test_history', { schema: 'teesas' })
], TblUserTestHistory);
//# sourceMappingURL=TblUserTestHistory.js.map