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
exports.GeoZones = void 0;
const typeorm_1 = require("typeorm");
let GeoZones = class GeoZones {
};
exports.GeoZones = GeoZones;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id', unsigned: true }),
    __metadata("design:type", Number)
], GeoZones.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'cca2', length: 3 }),
    __metadata("design:type", String)
], GeoZones.prototype, "cca2", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], GeoZones.prototype, "name", void 0);
exports.GeoZones = GeoZones = __decorate([
    (0, typeorm_1.Entity)('geo_zones', { schema: 'teesas' })
], GeoZones);
//# sourceMappingURL=GeoZones.js.map