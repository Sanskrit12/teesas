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
exports.TblNotification = void 0;
const typeorm_1 = require("typeorm");
let TblNotification = class TblNotification {
};
exports.TblNotification = TblNotification;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblNotification.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id', nullable: true, default: '0' }),
    __metadata("design:type", Number)
], TblNotification.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'notification_type', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblNotification.prototype, "notificationType", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'notification_id', nullable: true }),
    __metadata("design:type", Number)
], TblNotification.prototype, "notificationId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblNotification.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'message', nullable: true }),
    __metadata("design:type", String)
], TblNotification.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_date',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblNotification.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'response' }),
    __metadata("design:type", String)
], TblNotification.prototype, "response", void 0);
exports.TblNotification = TblNotification = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('notification_id', ['notificationId'], {}),
    (0, typeorm_1.Index)('user_id', ['userId'], {}),
    (0, typeorm_1.Index)('user_id_2', ['userId'], {}),
    (0, typeorm_1.Index)('user_id_3', ['userId'], {}),
    (0, typeorm_1.Entity)('tbl_notification', { schema: 'teesas' })
], TblNotification);
//# sourceMappingURL=TblNotification.js.map