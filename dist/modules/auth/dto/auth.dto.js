"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckEmailPhoneSchema = exports.CheckEmailPhoneDTO = exports.ResetPasswordSchema = exports.ResetPasswordDTO = exports.VerifyTokenSchema = exports.VerifyTokenDTO = exports.SendVerificationCodeSchema = exports.SendVerificationCodeDTO = exports.LoginSchema = exports.LoginDTO = exports.SocialAuthSchema = exports.SocialAuthDTO = exports.RegisterSchema = void 0;
const Joi = require("joi");
const passwordRegex = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
exports.RegisterSchema = Joi.object({
    name: Joi.string().optional(),
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .optional(),
    mobile: Joi.string().optional(),
    password: Joi.string()
        .required()
        .min(8)
        .max(12)
        .regex(passwordRegex)
        .error(new Error('Password does not meet complexity requirements')),
    confirmPassword: Joi.string()
        .required()
        .valid(Joi.ref('password'))
        .error(new Error('Passwords do not match')),
    countryId: Joi.number().required(),
    userType: Joi.string().valid('STUDENT', 'PARENT').required(),
})
    .or('mobile', 'email')
    .options({
    abortEarly: false,
    allowUnknown: false,
});
class SocialAuthDTO {
}
exports.SocialAuthDTO = SocialAuthDTO;
exports.SocialAuthSchema = Joi.object({
    social_id: Joi.string().required(),
    name: Joi.string().optional(),
}).options({
    abortEarly: false,
    allowUnknown: false,
});
class LoginDTO {
}
exports.LoginDTO = LoginDTO;
exports.LoginSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .optional(),
    phone: Joi.string().optional(),
    password: Joi.string().required(),
})
    .or('email', 'phone')
    .options({
    abortEarly: false,
    allowUnknown: false,
});
class SendVerificationCodeDTO {
}
exports.SendVerificationCodeDTO = SendVerificationCodeDTO;
exports.SendVerificationCodeSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
}).options({
    abortEarly: false,
    allowUnknown: false,
});
class VerifyTokenDTO {
}
exports.VerifyTokenDTO = VerifyTokenDTO;
exports.VerifyTokenSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    otp: Joi.number().required(),
}).options({
    abortEarly: false,
    allowUnknown: false,
});
class ResetPasswordDTO {
}
exports.ResetPasswordDTO = ResetPasswordDTO;
exports.ResetPasswordSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required(),
    password: Joi.string().required(),
}).options({
    abortEarly: false,
    allowUnknown: false,
});
class CheckEmailPhoneDTO {
}
exports.CheckEmailPhoneDTO = CheckEmailPhoneDTO;
exports.CheckEmailPhoneSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .optional(),
    phone: Joi.string().optional(),
})
    .or('email', 'phone')
    .options({
    abortEarly: false,
    allowUnknown: false,
});
//# sourceMappingURL=auth.dto.js.map