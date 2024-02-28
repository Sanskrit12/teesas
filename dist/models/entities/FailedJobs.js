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
exports.FailedJobs = void 0;
const typeorm_1 = require("typeorm");
let FailedJobs = class FailedJobs {
};
exports.FailedJobs = FailedJobs;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], FailedJobs.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'uuid', unique: true, length: 255 }),
    __metadata("design:type", String)
], FailedJobs.prototype, "uuid", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'connection' }),
    __metadata("design:type", String)
], FailedJobs.prototype, "connection", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'queue' }),
    __metadata("design:type", String)
], FailedJobs.prototype, "queue", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'payload' }),
    __metadata("design:type", String)
], FailedJobs.prototype, "payload", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'exception' }),
    __metadata("design:type", String)
], FailedJobs.prototype, "exception", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'failed_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], FailedJobs.prototype, "failedAt", void 0);
exports.FailedJobs = FailedJobs = __decorate([
    (0, typeorm_1.Index)('failed_jobs_uuid_unique', ['uuid'], { unique: true }),
    (0, typeorm_1.Entity)('failed_jobs', { schema: 'teesas' })
], FailedJobs);
//# sourceMappingURL=FailedJobs.js.map