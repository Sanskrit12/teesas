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
exports.TblReportData = void 0;
const typeorm_1 = require("typeorm");
let TblReportData = class TblReportData {
};
exports.TblReportData = TblReportData;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblReportData.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', length: 250 }),
    __metadata("design:type", String)
], TblReportData.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'created_date',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], TblReportData.prototype, "createdDate", void 0);
exports.TblReportData = TblReportData = __decorate([
    (0, typeorm_1.Entity)('tbl_report_data', { schema: 'teesas' })
], TblReportData);
//# sourceMappingURL=TblReportData.js.map