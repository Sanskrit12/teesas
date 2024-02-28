import { Response } from 'express';
import { UtilsService } from './utils.service';
export declare class UtilsController {
    private readonly utilsService;
    constructor(utilsService: UtilsService);
    uploadMedia(response: Response, files: Array<any>): Promise<void>;
    getCountries(response: Response): Promise<void>;
}
