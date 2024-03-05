import { TblCourses } from './TblCourses';
import { TblSubjects } from './TblSubjects';
export declare class TblClassStandard {
    id: number;
    courses: TblCourses;
    subjects?: TblSubjects;
    name: string;
    created: Date;
}
