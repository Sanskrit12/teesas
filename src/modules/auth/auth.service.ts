import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { config } from 'dotenv';
import {
  CheckEmailPhoneDTO,
  LoginDTO,
  RegisterDTO,
  ResetPasswordDTO,
  SendVerificationCodeDTO,
  SocialAuthDTO,
  VerifyTokenDTO,
} from './dto/auth.dto';
import { TblUser } from 'src/models/entities/TblUser';
import { TblParent } from 'src/models/entities/TblParent';
import { authMessages } from 'src/utils/messages';
import Logger from 'src/utils/logger';
import { Response } from '../../utils/response';
import { UtilsHelperService } from '../utils/utils.helper.service';
import * as moment from 'moment-timezone';
import { UtilsTimezoneService } from '../utils/utils.timezone.service';

config();
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private readonly utilsHelperService: UtilsHelperService,
    private readonly utilsTimezoneService: UtilsTimezoneService,
    @InjectRepository(TblUser) private userRepo: Repository<TblUser>,
    @InjectRepository(TblParent) private parentRepo: Repository<TblParent>,
  ) {}

  async registerUser(registerDTO: RegisterDTO): Promise<Response> {
    try {
      const { name, email, mobile, countryId, password, userType } =
        registerDTO;

      let user = await this.userRepo.findOneBy({ mobile });
      if (user) {
        throw new BadRequestException(authMessages.phoneAlreadyUsed);
      }
      user = await this.userRepo.findOneBy({ email });
      if (user) {
        throw new BadRequestException(authMessages.emailAlreadyUsed);
      }
      user = await this.userRepo.save({
        name,
        email,
        mobile,
        countryId: countryId,
        loginType: 'MANUAL',
        password: await this.utilsHelperService.hashPassword(password),
      });
      const data = await this.utilsHelperService.getUser(user.id);
      data['token'] = this.jwtService.sign({ id: user.id });
      return new Response({
        data: { user: data },
        message: authMessages.userRegistered,
      });
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException(e.message);
    }
  }

  async socialAuth(socialAuthDTO: SocialAuthDTO): Promise<Response> {
    try {
      const { social_id, name } = socialAuthDTO;
      let user = await this.userRepo.findOneBy({ socialId: social_id });
      if (user) {
        user = await this.userRepo.save({
          id: user.id,
          login_type: 'SOCIAL',
        });
      }
      if (!user) {
        user = await this.userRepo.save({
          socialId: social_id,
          name: name,
          loginType: 'SOCIAL',
        });
      }

      if (user.status == '0') {
        throw new BadRequestException(authMessages.userSuspended);
      }
      const data = await this.utilsHelperService.getUser(user.id);

      data['token'] = this.jwtService.sign({ id: user.id });
      return new Response({
        data: { user: data },
        message: authMessages.loginSuccessfully,
      });
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException(e.message);
    }
  }

  async login(loginDTO: LoginDTO): Promise<Response> {
    try {
      const { email, phone, password } = loginDTO;
      let user;
      const suspended_user = await this.userRepo.findOne({
        where: [
          {
            email,
            status: '0',
          },
          {
            mobile: phone ? phone : undefined,
            status: '0',
          },
        ],
      });

      if (suspended_user) {
        throw new BadRequestException(authMessages.userSuspended);
      }
      if (email) {
        user = await this.userRepo.findOne({
          where: {
            email,
            status: '1',
          },
        });
        if (!user) {
          throw new BadRequestException(authMessages.emailNotRegistered);
        }
      } else if (phone) {
        user = await this.userRepo.findOne({
          where: {
            mobile: phone,
            status: '1',
          },
        });
        if (!user) {
          throw new BadRequestException(authMessages.phoneNotRegistered);
        }
      }
      if (user) {
        if (user.loginType != 'MANUAL') {
          throw new BadRequestException(authMessages.EmailUsedInSocial);
        }
        if (
          await this.utilsHelperService.comparePassword(password, user.password)
        ) {
          await this.userRepo.save({
            id: user.id,
            loginType: 'MANUAL',
          });
          const data = await this.utilsHelperService.getUser(user.id);
          data['token'] = this.jwtService.sign({ id: user.id });

          return new Response({
            data: { user: data },
            message: authMessages.loginSuccessfully,
          });
        } else {
          throw new BadRequestException(authMessages.invalidCredentials);
        }
      } else {
        throw new BadRequestException(authMessages.emailNotRegistered);
      }
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException(e.message);
    }
  }

  async sendVerificationCode(
    sendVerificationCodeDTO: SendVerificationCodeDTO,
  ): Promise<Response> {
    try {
      const { email } = sendVerificationCodeDTO;
      const code = Math.floor(Math.random() * 900000) + 100000;
      const user = await this.userRepo.findOneBy({ email });
      if (user) {
        if (user.loginType != 'MANUAL') {
          throw new BadRequestException(authMessages.emailNotRegistered);
        }
        if (user.status != '1') {
          throw new BadRequestException(authMessages.accountDisabled);
        }
        await this.userRepo.save({
          id: user.id,
          otp: code,
          otpCreatedAt: moment
            .tz('Africa/Harare')
            .format('YYYY-MM-DD HH:mm:ss'),
        });
      } else if (!user) {
        await this.userRepo.save({
          email,
          otp: code,
        });
      }

      return new Response({
        data: {},
        message: authMessages.forgotPasswordMailSend,
      });
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException(e.message);
    }
  }

  async verifyToken(verifyTokenDTO: VerifyTokenDTO): Promise<Response> {
    try {
      const { otp, email } = verifyTokenDTO;
      // const decryptToken = await this.utilsService.decrypt(token);
      const user = await this.userRepo.findOne({
        where: {
          email,
          status: '1',
        },
      });
      const date = this.utilsTimezoneService
        .getDateTime(true)
        .subtract('15', 'minutes');

      const createdAt = this.utilsTimezoneService.parseTime(
        user.otpCreatedAt.toString(),
        true,
      );
      if (user.otp == otp) {
        // if (user.OTP == otp) {
        if (createdAt.isBefore(date)) {
          throw new BadRequestException(authMessages.otpExpired);
        }
        await this.userRepo.save({
          id: user.id,
          isVerified: true,
        });
        const data = await this.utilsHelperService.getUser(user.id);
        data['token'] = this.jwtService.sign({ id: data.id });
        return new Response({
          data: { user: data },
          message: authMessages.otpVerifiedSuccess,
        });
      } else {
        throw new BadRequestException(authMessages.incorrectOTP);
      }
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException(e.message);
    }
  }

  async resetPassword(resetPasswordDTO: ResetPasswordDTO): Promise<Response> {
    try {
      const { email, password } = resetPasswordDTO;
      let user = await this.userRepo.findOneBy({ email });
      if (!user) {
        throw new BadRequestException(authMessages.emailNotRegistered);
      } else if (user.status != '1') {
        throw new BadRequestException(authMessages.accountDisabled);
      }
      user = await this.userRepo.save({
        id: user.id,
        password: await this.utilsHelperService.hashPassword(password),
      });
      const data = await this.utilsHelperService.getUser(user.id);
      return new Response({
        data: { user: data },
        message: authMessages.passwordResetSuccess,
      });
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException(e.message);
    }
  }

  async checkEmailPhone(
    checkEmailPhoneDTO: CheckEmailPhoneDTO,
  ): Promise<Response> {
    try {
      const { phone, email } = checkEmailPhoneDTO;
      let is_unique = true;
      if (email) {
        const user = await this.userRepo.findOne({
          where: {
            email,
          },
        });
        if (user) {
          is_unique = false;
        }
      } else if (phone) {
        const user = await this.userRepo.findOne({
          where: {
            mobile: phone,
          },
        });
        if (user) {
          is_unique = false;
        }
      }
      return new Response({
        data: { is_unique: is_unique },
        message: authMessages.checked,
      });
    } catch (e) {
      Logger.error(e);
      throw new BadRequestException(e.message);
    }
  }
}
