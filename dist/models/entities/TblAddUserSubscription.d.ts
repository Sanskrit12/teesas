export declare class TblAddUserSubscription {
    id: number;
    userId: number;
    transactionId: number;
    subscriptionId: number;
    classIdInapp: number;
    planIdInapp: string;
    voucherId: number | null;
    deviceId: string;
    createTime: Date;
    inappExpireTime: string;
    cancelSubscription: '0' | '1';
    status: '0' | '1';
    isDeleted: '0' | '1';
    isOfflinePayment: number;
    freeVoucherCode: string;
    isInappPurchase: number;
    isManuallyPayment: number;
}
