import { ConfigService } from '@nestjs/config';
import { UtilsHelperService } from '../modules/utils/utils.helper.service';
declare const JwtStrategy_base: new (...args: any[]) => any;
export declare class JwtStrategy extends JwtStrategy_base {
    private configService;
    private readonly utilsHelperService;
    constructor(configService: ConfigService, utilsHelperService: UtilsHelperService);
    validate(user: any): Promise<any>;
}
export {};
