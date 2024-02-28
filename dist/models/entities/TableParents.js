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
exports.TableParents = void 0;
const typeorm_1 = require("typeorm");
const TableUsers_1 = require("./TableUsers");
let TableParents = class TableParents {
};
exports.TableParents = TableParents;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], TableParents.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'table_user_id', unsigned: true }),
    __metadata("design:type", String)
], TableParents.prototype, "tableUserId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'country_code', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableParents.prototype, "countryCode", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'mobile', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableParents.prototype, "mobile", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'code', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableParents.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableParents.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'login_type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableParents.prototype, "loginType", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], TableParents.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], TableParents.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TableUsers_1.TableUsers, (tableUsers) => tableUsers.tableParents, {
        onDelete: 'CASCADE',
        onUpdate: 'NO ACTION',
    }),
    (0, typeorm_1.JoinColumn)([{ name: 'table_user_id', referencedColumnName: 'id' }]),
    __metadata("design:type", TableUsers_1.TableUsers)
], TableParents.prototype, "tableUser", void 0);
exports.TableParents = TableParents = __decorate([
    (0, typeorm_1.Index)('table_parents_table_user_id_foreign', ['tableUserId'], {}),
    (0, typeorm_1.Entity)('table_parents', { schema: 'teesas' })
], TableParents);
//# sourceMappingURL=TableParents.js.map