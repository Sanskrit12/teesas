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
exports.TableUserClassHistories = void 0;
const typeorm_1 = require("typeorm");
const TableUsers_1 = require("./TableUsers");
let TableUserClassHistories = class TableUserClassHistories {
};
exports.TableUserClassHistories = TableUserClassHistories;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id', unsigned: true }),
    __metadata("design:type", String)
], TableUserClassHistories.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('bigint', { name: 'table_user_id', unsigned: true }),
    __metadata("design:type", String)
], TableUserClassHistories.prototype, "tableUserId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'class_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TableUserClassHistories.prototype, "classId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'is_current', length: 255, default: '0' }),
    __metadata("design:type", String)
], TableUserClassHistories.prototype, "isCurrent", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'is_current_parent',
        length: 255,
        default: '0',
    }),
    __metadata("design:type", String)
], TableUserClassHistories.prototype, "isCurrentParent", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created_at', nullable: true }),
    __metadata("design:type", Date)
], TableUserClassHistories.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'updated_at', nullable: true }),
    __metadata("design:type", Date)
], TableUserClassHistories.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TableUsers_1.TableUsers, (tableUsers) => tableUsers.tableUserClassHistories, { onDelete: 'CASCADE', onUpdate: 'NO ACTION' }),
    (0, typeorm_1.JoinColumn)([{ name: 'table_user_id', referencedColumnName: 'id' }]),
    __metadata("design:type", TableUsers_1.TableUsers)
], TableUserClassHistories.prototype, "tableUser", void 0);
exports.TableUserClassHistories = TableUserClassHistories = __decorate([
    (0, typeorm_1.Index)('table_user_class_histories_table_user_id_foreign', ['tableUserId'], {}),
    (0, typeorm_1.Entity)('table_user_class_histories', { schema: 'teesas' })
], TableUserClassHistories);
//# sourceMappingURL=TableUserClassHistories.js.map