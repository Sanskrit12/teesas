import * as Joi from 'joi';
import { UserTypes } from 'src/utils/enums';

// class StudentReqObj {
//   @IsNotEmpty()
//   @IsString()
//   firstName: string;

//   @IsNotEmpty()
//   @IsString()
//   lastName: string;

//   @IsNotEmpty()
//   @IsString()
//   gender: string;

//   @IsNotEmpty()
//   @IsString()
//   dateOfBirth: string;

//   packages: Array<string>;
// }
// export class RegisterUserReq {
//   @IsNotEmpty()
//   @IsString()
//   firstName: string;

//   @IsNotEmpty()
//   @IsString()
//   lastName: string;

//   @IsOptional()
//   @IsString()
//   @IsEmail()
//   email: string;

//   @IsOptional()
//   @IsString()
//   @ValidateIf((o) => !o.email || o.phoneNumber)
//   phoneNumber: string;

//   @IsNotEmpty()
//   @IsString()
//   @MinLength(8)
//   @MaxLength(12)
//   @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
//     message: 'password too weak',
//   })
//   password: string;

//   @IsNotEmpty()
//   @Match('password')
//   confirmPassword: string;

//   @IsNotEmpty()
//   countryId: string;

//   @IsNotEmpty()
//   @IsString()
//   userType?: 'Student' | 'Parent';
// }

// export class BasicRegRes {
//   createdUser?: User | undefined;
//   success?: boolean;
// }

const passwordRegex = /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
export interface RegisterDTO {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  countryId: number;
  mobile: string;
  userType: UserTypes;
}
export const RegisterSchema = Joi.object({
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

export class SocialAuthDTO {
  social_id: string;
  name: string;
}

export const SocialAuthSchema = Joi.object({
  social_id: Joi.string().required(),
  name: Joi.string().optional(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});

export class LoginDTO {
  email: string;
  phone: string;
  password: string;
}

export const LoginSchema = Joi.object({
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

export class SendVerificationCodeDTO {
  email: string;
}

export const SendVerificationCodeSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});

export class VerifyTokenDTO {
  email: string;
  otp: number;
}

export const VerifyTokenSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  otp: Joi.number().required(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});

export class ResetPasswordDTO {
  email: string;
  password: string;
}

export const ResetPasswordSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().required(),
}).options({
  abortEarly: false,
  allowUnknown: false,
});

export class CheckEmailPhoneDTO {
  email: string;
  phone: string;
}

export const CheckEmailPhoneSchema = Joi.object({
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

