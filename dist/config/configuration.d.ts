declare const _default: () => {
    database: {
        host: string;
        port: number;
        user: string;
        password: string;
        database: string;
        synchronize: boolean;
        logging: boolean;
        type: string;
    };
    jwt: {
        secret: string;
    };
    encryptionKey: string;
    timezone: string;
    mailer: {
        host: string;
        port: string;
        email: string;
        password: string;
    };
    s3: {
        key: string;
        secret: string;
        region: string;
        bucket: string;
    };
    local: {
        uploadPath: string;
    };
} | {
    database: {
        host: string;
        port: number;
        user: string;
        password: string;
        database: string;
        synchronize: boolean;
        logging: boolean;
        type: string;
    };
    jwt: {
        secret: string;
    };
    encryptionKey: string;
    timezone: string;
    mailer: {
        host: string;
        port: string;
        email: string;
        password: string;
    };
    s3: {
        key: string;
        secret: string;
        region: string;
        bucket: string;
    };
    local?: undefined;
};
export default _default;
