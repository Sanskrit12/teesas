import * as Joi from 'joi';
import { UserTypes } from 'src/utils/enums';
export interface RegisterDTO {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    countryId: number;
    mobile: string;
    userType: UserTypes;
}
export declare const RegisterSchema: Joi.ObjectSchema<any>;
export declare class SocialAuthDTO {
    social_id: string;
    name: string;
}
export declare const SocialAuthSchema: Joi.ObjectSchema<any>;
export declare class LoginDTO {
    email: string;
    phone: string;
    password: string;
}
export declare const LoginSchema: Joi.ObjectSchema<any>;
export declare class SendVerificationCodeDTO {
    email: string;
}
export declare const SendVerificationCodeSchema: Joi.ObjectSchema<any>;
export declare class VerifyTokenDTO {
    email: string;
    otp: number;
}
export declare const VerifyTokenSchema: Joi.ObjectSchema<any>;
export declare class ResetPasswordDTO {
    email: string;
    password: string;
}
export declare const ResetPasswordSchema: Joi.ObjectSchema<any>;
export declare class CheckEmailPhoneDTO {
    email: string;
    phone: string;
}
export declare const CheckEmailPhoneSchema: Joi.ObjectSchema<any>;
