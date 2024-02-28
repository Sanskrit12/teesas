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
exports.TblUserHistory = void 0;
const typeorm_1 = require("typeorm");
let TblUserHistory = class TblUserHistory {
};
exports.TblUserHistory = TblUserHistory;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblUserHistory.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'class_id', length: 255 }),
    __metadata("design:type", String)
], TblUserHistory.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'content_id', length: 255 }),
    __metadata("design:type", String)
], TblUserHistory.prototype, "contentId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'content_type', length: 255 }),
    __metadata("design:type", String)
], TblUserHistory.prototype, "contentType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'created', length: 255 }),
    __metadata("design:type", String)
], TblUserHistory.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_id', length: 255 }),
    __metadata("design:type", String)
], TblUserHistory.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'view_type', length: 255 }),
    __metadata("design:type", String)
], TblUserHistory.prototype, "viewType", void 0);
exports.TblUserHistory = TblUserHistory = __decorate([
    (0, typeorm_1.Index)('class_id', ['classId'], {}),
    (0, typeorm_1.Index)('content_id', ['contentId'], {}),
    (0, typeorm_1.Index)('content_type', ['contentType'], {}),
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_user_history', { schema: 'teesas' })
], TblUserHistory);
//# sourceMappingURL=TblUserHistory.js.map