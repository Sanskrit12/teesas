import { Repository } from 'typeorm';
import { TblUser } from 'src/models/entities/TblUser';
export declare class UtilsHelperService {
    private userRepo;
    constructor(userRepo: Repository<TblUser>);
    hashPassword(password: any): Promise<any>;
    comparePassword(password: any, hash: any): Promise<any>;
    getUser(id: number): Promise<TblUser>;
}
