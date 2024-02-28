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
exports.TblAppContent = void 0;
const typeorm_1 = require("typeorm");
let TblAppContent = class TblAppContent {
};
exports.TblAppContent = TblAppContent;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblAppContent.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'terms' }),
    __metadata("design:type", String)
], TblAppContent.prototype, "terms", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'about' }),
    __metadata("design:type", String)
], TblAppContent.prototype, "about", void 0);
__decorate([
    (0, typeorm_1.Column)('longtext', { name: 'policy' }),
    __metadata("design:type", String)
], TblAppContent.prototype, "policy", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'address', length: 255 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'contact_no', length: 255 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "contactNo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'email', length: 250 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'whatsapp', length: 250 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "whatsapp", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'fb_link', length: 255 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "fbLink", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'twitter_link', length: 255 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "twitterLink", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'instagram_link', length: 255 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "instagramLink", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'linkedin_link', length: 255 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "linkedinLink", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'youtube_link', length: 255 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "youtubeLink", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'user_app_version', length: 255 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "userAppVersion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'parent_app_version', length: 255 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "parentAppVersion", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'teacher_app_version', length: 255 }),
    __metadata("design:type", String)
], TblAppContent.prototype, "teacherAppVersion", void 0);
exports.TblAppContent = TblAppContent = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Entity)('tbl_app_content', { schema: 'teesas' })
], TblAppContent);
//# sourceMappingURL=TblAppContent.js.map