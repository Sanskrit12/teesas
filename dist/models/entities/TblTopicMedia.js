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
exports.TblTopicMedia = void 0;
const typeorm_1 = require("typeorm");
let TblTopicMedia = class TblTopicMedia {
};
exports.TblTopicMedia = TblTopicMedia;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblTopicMedia.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'title', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblTopicMedia.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'media_type', nullable: true, length: 250 }),
    __metadata("design:type", String)
], TblTopicMedia.prototype, "mediaType", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { name: 'description', nullable: true }),
    __metadata("design:type", String)
], TblTopicMedia.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'video_type', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblTopicMedia.prototype, "videoType", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'video', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblTopicMedia.prototype, "video", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'topic_id', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblTopicMedia.prototype, "topicId", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'thumbnail', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblTopicMedia.prototype, "thumbnail", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'subtitle_file', nullable: true, length: 255 }),
    __metadata("design:type", String)
], TblTopicMedia.prototype, "subtitleFile", void 0);
__decorate([
    (0, typeorm_1.Column)('int', { name: 's_no', nullable: true }),
    __metadata("design:type", Number)
], TblTopicMedia.prototype, "sNo", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblTopicMedia.prototype, "created", void 0);
exports.TblTopicMedia = TblTopicMedia = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Index)('media_type', ['mediaType'], {}),
    (0, typeorm_1.Index)('s_no', ['sNo'], {}),
    (0, typeorm_1.Index)('topic_id', ['topicId'], {}),
    (0, typeorm_1.Entity)('tbl_topic_media', { schema: 'teesas' })
], TblTopicMedia);
//# sourceMappingURL=TblTopicMedia.js.map