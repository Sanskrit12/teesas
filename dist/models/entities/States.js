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
exports.States = void 0;
const typeorm_1 = require("typeorm");
const Cities_1 = require("./Cities");
const Countries_1 = require("./Countries");
let States = class States {
};
exports.States = States;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], States.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'country_id', unsigned: true }),
    __metadata("design:type", String)
], States.prototype, "countryId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], States.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'status',
        enum: ['active', 'inactive'],
        default: 'active',
    }),
    __metadata("design:type", String)
], States.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], States.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'updated_at',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], States.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'deleted_at', nullable: true }),
    __metadata("design:type", Date)
], States.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Cities_1.Cities, (cities) => cities.state),
    __metadata("design:type", Array)
], States.prototype, "cities", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Countries_1.Countries, (countries) => countries.states, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'country_id', referencedColumnName: 'id' }]),
    __metadata("design:type", Countries_1.Countries)
], States.prototype, "country", void 0);
exports.States = States = __decorate([
    (0, typeorm_1.Index)('states_country_id_foreign', ['countryId'], {}),
    (0, typeorm_1.Entity)('states', { schema: 'teesas' })
], States);
//# sourceMappingURL=States.js.map