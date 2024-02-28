import { States } from './States';
export declare class Countries {
    id: string;
    name: string;
    status: 'active' | 'inactive';
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    states: States[];
}
