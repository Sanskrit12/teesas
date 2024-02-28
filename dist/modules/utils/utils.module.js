"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsModule = void 0;
const common_1 = require("@nestjs/common");
const utils_service_1 = require("./utils.service");
const utils_controller_1 = require("./utils.controller");
const typeorm_1 = require("@nestjs/typeorm");
const constants_1 = require("../../config/constants");
const utils_seeders_service_1 = require("./utils.seeders.service");
const utils_storage_service_1 = require("./utils.storage.service");
const utils_helper_service_1 = require("./utils.helper.service");
const utils_timezone_service_1 = require("./utils.timezone.service");
let UtilsModule = class UtilsModule {
};
exports.UtilsModule = UtilsModule;
exports.UtilsModule = UtilsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature(constants_1.ModuleConfigs['utils'].entities)],
        controllers: [utils_controller_1.UtilsController],
        providers: [
            utils_service_1.UtilsService,
            utils_seeders_service_1.UtilsSeedersService,
            utils_storage_service_1.UtilsStorageService,
            utils_helper_service_1.UtilsHelperService,
            utils_timezone_service_1.UtilsTimezoneService,
        ],
        exports: [
            utils_service_1.UtilsService,
            utils_timezone_service_1.UtilsTimezoneService,
            utils_helper_service_1.UtilsHelperService,
            utils_storage_service_1.UtilsStorageService,
        ],
    })
], UtilsModule);
//# sourceMappingURL=utils.module.js.map