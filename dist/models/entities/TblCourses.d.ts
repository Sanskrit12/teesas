import { TblClassStandard } from './TblClassStandard';
export declare class TblCourses {
    id: number;
    name: string;
    class_standard?: TblClassStandard;
    countryId: number;
    created: Date;
    status: '0' | '1';
    priority: string | null;
}
