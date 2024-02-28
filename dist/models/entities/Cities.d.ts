import { States } from './States';
export declare class Cities {
    id: string;
    stateId: string;
    name: string;
    shippingPrice: string | null;
    defaultShippingPrice: string | null;
    status: 'active' | 'inactive';
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    state: States;
}
