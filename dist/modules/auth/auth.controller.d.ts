import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import { RegisterDTO, SocialAuthDTO, LoginDTO, SendVerificationCodeDTO, VerifyTokenDTO, ResetPasswordDTO, CheckEmailPhoneDTO } from 'src/modules/auth/dto/auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    register(registerDTO: RegisterDTO, response: Response): Promise<void>;
    socialAuth(socialAuthDTO: SocialAuthDTO, response: Response): Promise<void>;
    login(loginDTO: LoginDTO, response: Response): Promise<void>;
    requestForgotPassword(sendVerificationCodeDTO: SendVerificationCodeDTO, response: Response): Promise<void>;
    verifyToken(response: Response, verifyTokenDTO: VerifyTokenDTO): Promise<void>;
    resetPassword(resetPasswordDTO: ResetPasswordDTO, response: Response): Promise<void>;
    checkEmailPhone(response: Response, checkEmailPhoneDTO: CheckEmailPhoneDTO): Promise<void>;
    logOut(response: Response, request: Request): Promise<void>;
}
