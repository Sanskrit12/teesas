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
exports.TblIndomievoucher = void 0;
const typeorm_1 = require("typeorm");
let TblIndomievoucher = class TblIndomievoucher {
};
exports.TblIndomievoucher = TblIndomievoucher;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblIndomievoucher.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 'user_id' }),
    __metadata("design:type", Number)
], TblIndomievoucher.prototype, "userId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'sales_code', length: 250 }),
    __metadata("design:type", String)
], TblIndomievoucher.prototype, "salesCode", void 0);
exports.TblIndomievoucher = TblIndomievoucher = __decorate([
    (0, typeorm_1.Entity)('tbl_indomievoucher', { schema: 'teesas' })
], TblIndomievoucher);
//# sourceMappingURL=TblIndomievoucher.js.map