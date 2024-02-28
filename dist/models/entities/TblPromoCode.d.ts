export declare class TblPromoCode {
    id: number;
    codeName: string;
    value: string;
    validity: string;
    limit: number;
    minAmount: number;
    maxAmount: number;
    promocodeFor: string | null;
    created: Date;
}
