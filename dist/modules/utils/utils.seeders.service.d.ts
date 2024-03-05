import { OnApplicationBootstrap } from '@nestjs/common';
import { Repository } from 'typeorm';
import { UtilsHelperService } from '../utils/utils.helper.service';
import { CountryList } from 'src/models/entities/CountryList';
import { TblCourses } from 'src/models/entities/TblCourses';
import { TblClassStandard } from 'src/models/entities/TblClassStandard';
import { TblSubjects } from 'src/models/entities/TblSubjects';
import { TblChapter } from 'src/models/entities/TblChapter';
export declare class UtilsSeedersService implements OnApplicationBootstrap {
    private readonly utilsHelperService;
    private countriesRepo;
    private coursesRepo;
    private classRepo;
    private subjectRepo;
    private chapterRepo;
    constructor(utilsHelperService: UtilsHelperService, countriesRepo: Repository<CountryList>, coursesRepo: Repository<TblCourses>, classRepo: Repository<TblClassStandard>, subjectRepo: Repository<TblSubjects>, chapterRepo: Repository<TblChapter>);
    onApplicationBootstrap(): Promise<void>;
    seedCountries(): Promise<void>;
    seedCourses(): Promise<void>;
    seedClass(): Promise<void>;
}
