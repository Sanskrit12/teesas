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
exports.TblTeacherNotification = void 0;
const typeorm_1 = require("typeorm");
let TblTeacherNotification = class TblTeacherNotification {
};
exports.TblTeacherNotification = TblTeacherNotification;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblTeacherNotification.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'teacher_id' }),
    __metadata("design:type", Number)
], TblTeacherNotification.prototype, "teacherId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'notification_type', length: 255 }),
    __metadata("design:type", String)
], TblTeacherNotification.prototype, "notificationType", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'notification_id' }),
    __metadata("design:type", Number)
], TblTeacherNotification.prototype, "notificationId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 255 }),
    __metadata("design:type", String)
], TblTeacherNotification.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'message', length: 255 }),
    __metadata("design:type", String)
], TblTeacherNotification.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_time',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblTeacherNotification.prototype, "createdTime", void 0);
exports.TblTeacherNotification = TblTeacherNotification = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('notification_id', ['notificationId'], {}),
    (0, typeorm_1.Index)('teacher_id', ['teacherId'], {}),
    (0, typeorm_1.Entity)('tbl_teacher_notification', { schema: 'teesas' })
], TblTeacherNotification);
//# sourceMappingURL=TblTeacherNotification.js.map