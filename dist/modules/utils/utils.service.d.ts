import { Repository } from 'typeorm';
import { Response } from '../../utils/response';
import { UtilsStorageService } from './utils.storage.service';
import { CountryList } from 'src/models/entities/CountryList';
export declare class UtilsService {
    private readonly utilsStorageService;
    private countriesRepo;
    constructor(utilsStorageService: UtilsStorageService, countriesRepo: Repository<CountryList>);
    getCountries(): Promise<Response>;
    uploadMedia(files: any[]): Promise<{
        data: {
            resources: {
                key: any;
                url: string;
                type: string;
            }[];
        };
    }>;
    uploadResource(files: any[]): Promise<Response>;
}
