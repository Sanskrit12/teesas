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
exports.TblSession = void 0;
const typeorm_1 = require("typeorm");
let TblSession = class TblSession {
};
exports.TblSession = TblSession;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'auto_id' }),
    __metadata("design:type", Number)
], TblSession.prototype, "autoId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'id', nullable: true, length: 225 }),
    __metadata("design:type", String)
], TblSession.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'ip_address', nullable: true, length: 225 }),
    __metadata("design:type", String)
], TblSession.prototype, "ipAddress", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_agent', nullable: true, length: 225 }),
    __metadata("design:type", String)
], TblSession.prototype, "userAgent", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'last_activity', nullable: true, length: 225 }),
    __metadata("design:type", String)
], TblSession.prototype, "lastActivity", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'data', nullable: true }),
    __metadata("design:type", String)
], TblSession.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'timestamp', nullable: true, length: 225 }),
    __metadata("design:type", String)
], TblSession.prototype, "timestamp", void 0);
exports.TblSession = TblSession = __decorate([
    (0, typeorm_1.Entity)('tbl_session', { schema: 'teesas' })
], TblSession);
//# sourceMappingURL=TblSession.js.map