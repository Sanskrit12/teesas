export declare class TblTeacher {
    id: number;
    name: string;
    email: string;
    profile: string;
    password: string;
    mobile: string | null;
    status: '0' | '1' | '2' | null;
    deviceToken: string | null;
    deviceType: string | null;
    createTime: Date;
    countryId: string | null;
    socketId: string | null;
}
