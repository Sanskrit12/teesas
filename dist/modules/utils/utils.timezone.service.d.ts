import * as moment from 'moment-timezone';
import { ConfigService } from '@nestjs/config';
export declare class UtilsTimezoneService {
    private readonly configService;
    constructor(configService: ConfigService);
    getDateTime(utc?: boolean): moment.Moment;
    parseTime(date: string, utc?: boolean): moment.Moment;
}
