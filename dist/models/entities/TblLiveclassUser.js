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
exports.TblLiveclassUser = void 0;
const typeorm_1 = require("typeorm");
let TblLiveclassUser = class TblLiveclassUser {
};
exports.TblLiveclassUser = TblLiveclassUser;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblLiveclassUser.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblLiveclassUser.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'live_class_id' }),
    __metadata("design:type", Number)
], TblLiveclassUser.prototype, "liveClassId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'start_time', length: 255 }),
    __metadata("design:type", String)
], TblLiveclassUser.prototype, "startTime", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'end_time', length: 255 }),
    __metadata("design:type", String)
], TblLiveclassUser.prototype, "endTime", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'status', nullable: true, default: '0' }),
    __metadata("design:type", Number)
], TblLiveclassUser.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblLiveclassUser.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_type', nullable: true, length: 45 }),
    __metadata("design:type", String)
], TblLiveclassUser.prototype, "userType", void 0);
exports.TblLiveclassUser = TblLiveclassUser = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('live_class_id', ['liveClassId'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_liveclass_user', { schema: 'teesas' })
], TblLiveclassUser);
//# sourceMappingURL=TblLiveclassUser.js.map