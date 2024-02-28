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
exports.TblEbbokComment = void 0;
const typeorm_1 = require("typeorm");
let TblEbbokComment = class TblEbbokComment {
};
exports.TblEbbokComment = TblEbbokComment;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblEbbokComment.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblEbbokComment.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'book_id' }),
    __metadata("design:type", Number)
], TblEbbokComment.prototype, "bookId", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'comment' }),
    __metadata("design:type", String)
], TblEbbokComment.prototype, "comment", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'time', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblEbbokComment.prototype, "time", void 0);
exports.TblEbbokComment = TblEbbokComment = __decorate([
    (0, typeorm_1.Entity)('tbl_ebbok_comment', { schema: 'teesas' })
], TblEbbokComment);
//# sourceMappingURL=TblEbbokComment.js.map