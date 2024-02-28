import { TableUsers } from './TableUsers';
export declare class TableParents {
    id: string;
    tableUserId: string;
    countryCode: string | null;
    mobile: string | null;
    code: string | null;
    email: string | null;
    loginType: string | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    tableUser: TableUsers;
}
