"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.default = () => {
    const env = process.env.ENVIRONMENT;
    switch (env) {
        case 'debug': {
            return {
                database: {
                    host: process.env.LOCAL_DB_HOST,
                    port: 3306,
                    user: process.env.LOCAL_DB_USERNAME,
                    password: process.env.LOCAL_DB_PASSWORD,
                    database: process.env.LOCAL_DB_NAME,
                    synchronize: true,
                    logging: true,
                    type: 'mysql',
                },
                jwt: {
                    secret: process.env.ENCRYPTION_KEY,
                },
                encryptionKey: process.env.ENCRYPTION_KEY,
                timezone: process.env.TIMEZONE,
                mailer: {
                    host: process.env.SMTP_HOST,
                    port: process.env.SMTP_PORT,
                    email: process.env.SENDER_EMAIL,
                    password: process.env.SMTP_PASSWORD,
                },
                s3: {
                    key: process.env.S3_KEY,
                    secret: process.env.S3_SECRET,
                    region: process.env.S3_REGION,
                    bucket: process.env.S3_BUCKET,
                },
                local: {
                    uploadPath: 'src/media',
                },
            };
        }
        case 'dev': {
            return {
                database: {
                    host: process.env.DEV_DB_HOST,
                    port: 3306,
                    user: process.env.DEV_DB_USERNAME,
                    password: process.env.DEV_DB_PASSWORD,
                    database: process.env.DEV_DB_NAME,
                    synchronize: true,
                    logging: true,
                    type: 'mysql',
                },
                jwt: {
                    secret: process.env.ENCRYPTION_KEY,
                },
                encryptionKey: process.env.ENCRYPTION_KEY,
                timezone: process.env.TIMEZONE,
                mailer: {
                    host: process.env.SMTP_HOST,
                    port: process.env.SMTP_PORT,
                    email: process.env.SENDER_EMAIL,
                    password: process.env.SMTP_PASSWORD,
                },
                s3: {
                    key: process.env.S3_KEY,
                    secret: process.env.S3_SECRET,
                    region: process.env.S3_REGION,
                    bucket: process.env.S3_BUCKET,
                },
            };
        }
        case 'prod': {
            return {
                database: {
                    host: process.env.PROD_DB_HOST,
                    port: 3306,
                    user: process.env.PROD_DB_USERNAME,
                    password: process.env.PROD_DB_PASSWORD,
                    database: process.env.PROD_DB_NAME,
                    synchronize: false,
                    logging: true,
                    type: 'mysql',
                },
                jwt: {
                    secret: process.env.ENCRYPTION_KEY,
                },
                encryptionKey: process.env.ENCRYPTION_KEY,
                timezone: process.env.TIMEZONE,
                mailer: {
                    host: process.env.SMTP_HOST,
                    port: process.env.SMTP_PORT,
                    email: process.env.SENDER_EMAIL,
                    password: process.env.SMTP_PASSWORD,
                },
                s3: {
                    key: process.env.S3_KEY,
                    secret: process.env.S3_SECRET,
                    region: process.env.S3_REGION,
                    bucket: process.env.S3_BUCKET,
                },
            };
        }
    }
};
//# sourceMappingURL=configuration.js.map