import { OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UtilsHelperService } from '../utils/utils.helper.service';
import { CountryList } from 'src/models/entities/CountryList';
import { TblCourses } from 'src/models/entities/TblCourses';
import { TblClassStandard } from 'src/models/entities/TblClassStandard';
export declare class UtilsSeedersService implements OnApplicationBootstrap {
    private readonly utilsHelperService;
    private countriesRepo;
    private coursesRepo;
    private classRepo;
    constructor(utilsHelperService: UtilsHelperService, countriesRepo: Repository<CountryList>, coursesRepo: Repository<TblCourses>, classRepo: Repository<TblClassStandard>);
    onApplicationBootstrap(): Promise<void>;
    seedCountries(): Promise<void>;
    seedCourses(): Promise<void>;
    seedClass(): Promise<void>;
}
