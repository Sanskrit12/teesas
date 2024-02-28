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
exports.UtilsTimezoneService = void 0;
const common_1 = require("@nestjs/common");
const moment = require("moment-timezone");
const config_1 = require("@nestjs/config");
let UtilsTimezoneService = class UtilsTimezoneService {
    constructor(configService) {
        this.configService = configService;
    }
    getDateTime(utc) {
        const timezone = this.configService.get('timezone');
        return utc ? moment.utc() : moment.tz(timezone);
    }
    parseTime(date, utc) {
        const timezone = this.configService.get('timezone');
        return utc
            ? moment.utc(moment(date).format('YYYY-MM-DD HH:mm:ss'), 'YYYY-MM-DD HH:mm:ss', timezone)
            : moment.tz(moment(date).format('YYYY-MM-DD HH:mm:ss'), 'YYYY-MM-DD HH:mm:ss', timezone);
    }
};
exports.UtilsTimezoneService = UtilsTimezoneService;
exports.UtilsTimezoneService = UtilsTimezoneService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], UtilsTimezoneService);
//# sourceMappingURL=utils.timezone.service.js.map