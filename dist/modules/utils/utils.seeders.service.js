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
const TblCourses_1 = require("../../models/entities/TblCourses");
let UtilsSeedersService = class UtilsSeedersService {
    constructor(utilsHelperService, countriesRepo, coursesRepo) {
        this.utilsHelperService = utilsHelperService;
        this.countriesRepo = countriesRepo;
        this.coursesRepo = coursesRepo;
    }
    async onApplicationBootstrap() {
        await this.seedCountries();
        await this.seedCourses();
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
};
exports.UtilsSeedersService = UtilsSeedersService;
exports.UtilsSeedersService = UtilsSeedersService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(CountryList_1.CountryList)),
    __param(2, (0, typeorm_1.InjectRepository)(TblCourses_1.TblCourses)),
    __metadata("design:paramtypes", [utils_helper_service_1.UtilsHelperService,
        typeorm_2.Repository,
        typeorm_2.Repository])
], UtilsSeedersService);
//# sourceMappingURL=utils.seeders.service.js.map