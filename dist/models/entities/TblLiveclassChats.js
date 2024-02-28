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
exports.TblLiveclassChats = void 0;
const typeorm_1 = require("typeorm");
let TblLiveclassChats = class TblLiveclassChats {
};
exports.TblLiveclassChats = TblLiveclassChats;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblLiveclassChats.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblLiveclassChats.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'liveclass_id' }),
    __metadata("design:type", Number)
], TblLiveclassChats.prototype, "liveclassId", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'message' }),
    __metadata("design:type", String)
], TblLiveclassChats.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'time', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblLiveclassChats.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'parent_id', enum: ['0', '1'], default: '0' }),
    __metadata("design:type", String)
], TblLiveclassChats.prototype, "parentId", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblLiveclassChats.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_type', nullable: true, length: 45 }),
    __metadata("design:type", String)
], TblLiveclassChats.prototype, "userType", void 0);
exports.TblLiveclassChats = TblLiveclassChats = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('liveclass_id', ['liveclassId'], {}),
    (0, typeorm_1.Index)('parent_id', ['parentId'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_liveclass_chats', { schema: 'teesas' })
], TblLiveclassChats);
//# sourceMappingURL=TblLiveclassChats.js.map