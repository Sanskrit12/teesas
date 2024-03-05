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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsSeedersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const utils_helper_service_1 = require("../utils/utils.helper.service");
const CountryList_1 = require("../../models/entities/CountryList");
const countries = require("../../utils/countries.json");
const packages = require("../../utils/packages.json");
const classes = require("../../utils/classStandard.json");
const TblCourses_1 = require("../../models/entities/TblCourses");
const TblClassStandard_1 = require("../../models/entities/TblClassStandard");
const TblSubjects_1 = require("../../models/entities/TblSubjects");
const TblChapter_1 = require("../../models/entities/TblChapter");
let UtilsSeedersService = class UtilsSeedersService {
    constructor(utilsHelperService, countriesRepo, coursesRepo, classRepo, subjectRepo, chapterRepo) {
        this.utilsHelperService = utilsHelperService;
        this.countriesRepo = countriesRepo;
        this.coursesRepo = coursesRepo;
        this.classRepo = classRepo;
        this.subjectRepo = subjectRepo;
        this.chapterRepo = chapterRepo;
    }
    async onApplicationBootstrap() {
        await this.seedCountries();
        await this.seedCourses();
        await this.seedClass();
    }
    async seedCountries() {
        const count = await this.countriesRepo.count();
        if (count == 0) {
            const data = countries.map((item) => {
                return {
                    country: item.country,
                    countryCode: item.country_code,
                    dialingCode: item.dialing_code,
                    currency: item.currency,
                    code: item.code,
                    symbol: item.symbol,
                    priceRate: item.price_rate,
                };
            });
            await this.countriesRepo.save(data);
        }
    }
    async seedCourses() {
        const count = await this.coursesRepo.count();
        if (count == 0) {
            const data = packages.map((item) => {
                return {
                    name: item.name,
                    countryId: parseInt(item.country_id, 10),
                    priority: item.priority,
                };
            });
            await this.coursesRepo.save(data);
        }
    }
    async seedClass() {
        const count = await this.classRepo.count();
        if (count == 0) {
            const data = classes.map(async (item) => {
                const classStandard = await this.classRepo.save({
                    name: item.name,
                    courses: {
                        id: item.course_id,
                    },
                });
                const subject = await this.subjectRepo.save({
                    name: item.subject_name,
                    class_standard: {
                        id: classStandard.id,
                    },
                });
                for (let index = 0; index < item.chapters.length; index++) {
                    const element = item.chapters[index];
                    await this.chapterRepo.save({
                        name: element.chapter_name,
                        subjects: { id: subject.id },
                    });
                }
            });
        }
    }
};
exports.UtilsSeedersService = UtilsSeedersService;
exports.UtilsSeedersService = UtilsSeedersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(CountryList_1.CountryList)),
    __param(2, (0, typeorm_1.InjectRepository)(TblCourses_1.TblCourses)),
    __param(3, (0, typeorm_1.InjectRepository)(TblClassStandard_1.TblClassStandard)),
    __param(4, (0, typeorm_1.InjectRepository)(TblSubjects_1.TblSubjects)),
    __param(5, (0, typeorm_1.InjectRepository)(TblChapter_1.TblChapter)),
    __metadata("design:paramtypes", [utils_helper_service_1.UtilsHelperService,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UtilsSeedersService);
//# sourceMappingURL=utils.seeders.service.js.map