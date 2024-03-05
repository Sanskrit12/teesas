import { TblClassStandard } from './TblClassStandard';
import { TblChapter } from './TblChapter';
export declare class TblSubjects {
    id: number;
    name: string;
    class_standard: TblClassStandard;
    chapters?: TblChapter;
    iconId: string;
    colorCodeGradiant: string;
    colorPlatId: string;
    sNo: number;
    created: Date;
}
