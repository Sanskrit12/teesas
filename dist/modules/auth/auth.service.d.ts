import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import { CheckEmailPhoneDTO, LoginDTO, RegisterDTO, ResetPasswordDTO, SendVerificationCodeDTO, SocialAuthDTO, VerifyTokenDTO } from './dto/auth.dto';
import { TblUser } from 'src/models/entities/TblUser';
import { TblParent } from 'src/models/entities/TblParent';
import { Response } from '../../utils/response';
import { UtilsHelperService } from '../utils/utils.helper.service';
import { UtilsTimezoneService } from '../utils/utils.timezone.service';
export declare class AuthService {
    private jwtService;
    private readonly utilsHelperService;
    private readonly utilsTimezoneService;
    private userRepo;
    private parentRepo;
    constructor(jwtService: JwtService, utilsHelperService: UtilsHelperService, utilsTimezoneService: UtilsTimezoneService, userRepo: Repository<TblUser>, parentRepo: Repository<TblParent>);
    registerUser(registerDTO: RegisterDTO): Promise<Response>;
    socialAuth(socialAuthDTO: SocialAuthDTO): Promise<Response>;
    login(loginDTO: LoginDTO): Promise<Response>;
    sendVerificationCode(sendVerificationCodeDTO: SendVerificationCodeDTO): Promise<Response>;
    verifyToken(verifyTokenDTO: VerifyTokenDTO): Promise<Response>;
    resetPassword(resetPasswordDTO: ResetPasswordDTO): Promise<Response>;
    checkEmailPhone(checkEmailPhoneDTO: CheckEmailPhoneDTO): Promise<Response>;
}
