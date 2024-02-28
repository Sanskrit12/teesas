export declare class TblQuestion {
    id: number;
    practiceId: string | null;
    testId: string | null;
    question: string;
    questionImage: string;
    level: string | null;
    created: Date;
    isFlag: '0' | '1';
    topicId: string;
    solution: string;
    solutionImage: string;
    hint: string;
    hintImage: string;
    answer: number;
}
