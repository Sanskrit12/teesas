import { OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UtilsHelperService } from '../utils/utils.helper.service';
import { CountryList } from 'src/models/entities/CountryList';
import { TblCourses } from 'src/models/entities/TblCourses';
export declare class UtilsSeedersService implements OnApplicationBootstrap {
    private readonly utilsHelperService;
    private countriesRepo;
    private coursesRepo;
    constructor(utilsHelperService: UtilsHelperService, countriesRepo: Repository<CountryList>, coursesRepo: Repository<TblCourses>);
    onApplicationBootstrap(): Promise<void>;
    seedCountries(): Promise<void>;
    seedCourses(): Promise<void>;
}
