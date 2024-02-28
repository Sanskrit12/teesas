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
exports.TblSubscription = void 0;
const typeorm_1 = require("typeorm");
let TblSubscription = class TblSubscription {
};
exports.TblSubscription = TblSubscription;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblSubscription.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'class_id' }),
    __metadata("design:type", Number)
], TblSubscription.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'amount', length: 255 }),
    __metadata("design:type", String)
], TblSubscription.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'discount' }),
    __metadata("design:type", Number)
], TblSubscription.prototype, "discount", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_id', length: 255 }),
    __metadata("design:type", String)
], TblSubscription.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'plan_id', length: 255 }),
    __metadata("design:type", String)
], TblSubscription.prototype, "planId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'plan_id_inapp', length: 50 }),
    __metadata("design:type", String)
], TblSubscription.prototype, "planIdInapp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'time', length: 255 }),
    __metadata("design:type", String)
], TblSubscription.prototype, "time", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'description', length: 255 }),
    __metadata("design:type", String)
], TblSubscription.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblSubscription.prototype, "created", void 0);
exports.TblSubscription = TblSubscription = __decorate([
    (0, typeorm_1.Index)('class_id', ['classId'], {}),
    (0, typeorm_1.Index)('country_id', ['countryId'], {}),
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('plan_id', ['planId'], {}),
    (0, typeorm_1.Index)('plan_id_inapp', ['planIdInapp'], {}),
    (0, typeorm_1.Entity)('tbl_subscription', { schema: 'teesas' })
], TblSubscription);
//# sourceMappingURL=TblSubscription.js.map