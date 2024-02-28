import { Cities } from './Cities';
import { Countries } from './Countries';
export declare class States {
    id: string;
    countryId: string;
    name: string;
    status: 'active' | 'inactive';
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
    cities: Cities[];
    country: Countries;
}
