import { TableUsers } from './TableUsers';
export declare class TableUserClassHistories {
    id: string;
    tableUserId: string;
    classId: string | null;
    isCurrent: string;
    isCurrentParent: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    tableUser: TableUsers;
}
