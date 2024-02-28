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
exports.Adminchats = void 0;
const typeorm_1 = require("typeorm");
let Adminchats = class Adminchats {
};
exports.Adminchats = Adminchats;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], Adminchats.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], Adminchats.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'support_id' }),
    __metadata("design:type", Number)
], Adminchats.prototype, "supportId", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'message' }),
    __metadata("design:type", String)
], Adminchats.prototype, "message", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Adminchats.prototype, "created", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'file', length: 255 }),
    __metadata("design:type", String)
], Adminchats.prototype, "file", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', { name: 'type', enum: ['0', '1', '2'], default: '0' }),
    __metadata("design:type", String)
], Adminchats.prototype, "type", void 0);
exports.Adminchats = Adminchats = __decorate([
    (0, typeorm_1.Entity)('adminchats', { schema: 'teesas' })
], Adminchats);
//# sourceMappingURL=Adminchats.js.map