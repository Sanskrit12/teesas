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
exports.TblTopics = void 0;
const typeorm_1 = require("typeorm");
const TblChapter_1 = require("./TblChapter");
let TblTopics = class TblTopics {
};
exports.TblTopics = TblTopics;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TblTopics.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => TblChapter_1.TblChapter, (chapters) => chapters.topics, {
        onDelete: 'CASCADE',
    }),
    (0, typeorm_1.JoinColumn)({ name: 'chapter_id' }),
    __metadata("design:type", TblChapter_1.TblChapter)
], TblTopics.prototype, "chapters", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'topic_name', length: 255 }),
    __metadata("design:type", String)
], TblTopics.prototype, "topicName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'topic_image', length: 255 }),
    __metadata("design:type", String)
], TblTopics.prototype, "topicImage", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], TblTopics.prototype, "created", void 0);
exports.TblTopics = TblTopics = __decorate([
    (0, typeorm_1.Index)('id', ['id'], {}),
    (0, typeorm_1.Entity)('tbl_topics', { schema: 'teesas' })
], TblTopics);
//# sourceMappingURL=TblTopics.js.map