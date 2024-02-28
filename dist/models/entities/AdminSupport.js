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
exports.AdminSupport = void 0;
const typeorm_1 = require("typeorm");
let AdminSupport = class AdminSupport {
};
exports.AdminSupport = AdminSupport;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], AdminSupport.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], AdminSupport.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'status', nullable: true, default: '0' }),
    __metadata("design:type", Number)
], AdminSupport.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'likes',
        enum: ['0', '1', '2'],
        default: '0',
    }),
    __metadata("design:type", String)
], AdminSupport.prototype, "likes", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_date',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], AdminSupport.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'last_msg_time', length: 255 }),
    __metadata("design:type", String)
], AdminSupport.prototype, "lastMsgTime", void 0);
exports.AdminSupport = AdminSupport = __decorate([
    (0, typeorm_1.Entity)('admin_support', { schema: 'teesas' })
], AdminSupport);
//# sourceMappingURL=AdminSupport.js.map