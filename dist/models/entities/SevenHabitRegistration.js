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
exports.SevenHabitRegistration = void 0;
const typeorm_1 = require("typeorm");
let SevenHabitRegistration = class SevenHabitRegistration {
};
exports.SevenHabitRegistration = SevenHabitRegistration;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], SevenHabitRegistration.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', nullable: true, length: 191 }),
    __metadata("design:type", String)
], SevenHabitRegistration.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', nullable: true, length: 191 }),
    __metadata("design:type", String)
], SevenHabitRegistration.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'class', nullable: true, length: 191 }),
    __metadata("design:type", String)
], SevenHabitRegistration.prototype, "class", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'school_name', nullable: true, length: 191 }),
    __metadata("design:type", String)
], SevenHabitRegistration.prototype, "schoolName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_code', nullable: true, length: 191 }),
    __metadata("design:type", String)
], SevenHabitRegistration.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile', nullable: true, length: 191 }),
    __metadata("design:type", String)
], SevenHabitRegistration.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'age', nullable: true, length: 191 }),
    __metadata("design:type", String)
], SevenHabitRegistration.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], SevenHabitRegistration.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'updated_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], SevenHabitRegistration.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'address', nullable: true, length: 191 }),
    __metadata("design:type", String)
], SevenHabitRegistration.prototype, "address", void 0);
exports.SevenHabitRegistration = SevenHabitRegistration = __decorate([
    (0, typeorm_1.Entity)('seven_habit_registration', { schema: 'teesas' })
], SevenHabitRegistration);
//# sourceMappingURL=SevenHabitRegistration.js.map