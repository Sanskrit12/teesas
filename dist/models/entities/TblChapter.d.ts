import { TblSubjects } from './TblSubjects';
import { TblTopics } from './TblTopics';
export declare class TblChapter {
    id: number;
    subjects: TblSubjects;
    topics?: TblTopics;
    name: string;
    sNo: number;
    created: Date;
}
