import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { Response, Request } from 'express';
import { AuthService } from './auth.service';
import {
  RegisterSchema,
  RegisterDTO,
  SocialAuthSchema,
  SocialAuthDTO,
  LoginSchema,
  LoginDTO,
  SendVerificationCodeSchema,
  SendVerificationCodeDTO,
  VerifyTokenSchema,
  VerifyTokenDTO,
  ResetPasswordSchema,
  ResetPasswordDTO,
  CheckEmailPhoneSchema,
  CheckEmailPhoneDTO,
} from 'src/modules/auth/dto/auth.dto';
import { JoiValidationPipe } from 'src/utils/joi.validation.pipe';
import { Response as RestResponse } from '../../utils/response';
import { JwtAuthGuard } from 'src/utils/jwt.guard';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  // @Middleware
  // async sessionGuard(req, resp) {
  //   await this.authService.verifyToken(req, resp, {
  //     noTimeout: true,
  //     useCookies: true,
  //   });
  // }

  @Post('register')
  @UsePipes(new JoiValidationPipe(RegisterSchema))
  async register(
    @Body() registerDTO: RegisterDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const result = await this.authService.registerUser(registerDTO);
      response.status(result.status).json(result);
    } catch (e) {
      response.status(HttpStatus.BAD_REQUEST).json(
        new RestResponse({
          status: HttpStatus.BAD_REQUEST,
          message: e.message,
        }),
      );
    }
  }

  @Post('social-auth')
  @UsePipes(new JoiValidationPipe(SocialAuthSchema))
  async socialAuth(
    @Body() socialAuthDTO: SocialAuthDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const result = await this.authService.socialAuth(socialAuthDTO);
      response.status(result.status).json(result);
    } catch (e) {
      response.status(HttpStatus.BAD_REQUEST).json(
        new RestResponse({
          status: HttpStatus.BAD_REQUEST,
          message: e.message,
        }),
      );
    }
  }

  @Post('login')
  @UsePipes(new JoiValidationPipe(LoginSchema))
  async login(
    @Body() loginDTO: LoginDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const result = await this.authService.login(loginDTO);
      response.status(result.status).json(result);
    } catch (e) {
      response.status(HttpStatus.BAD_REQUEST).json(
        new RestResponse({
          status: HttpStatus.BAD_REQUEST,
          message: e.message,
        }),
      );
    }
  }

  @Post('send-verification-code')
  @UsePipes(new JoiValidationPipe(SendVerificationCodeSchema))
  async requestForgotPassword(
    @Body() sendVerificationCodeDTO: SendVerificationCodeDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const result = await this.authService.sendVerificationCode(
        sendVerificationCodeDTO,
      );
      response.status(result.status).json(result);
    } catch (e) {
      response.status(HttpStatus.BAD_REQUEST).json(
        new RestResponse({
          status: HttpStatus.BAD_REQUEST,
          message: e.message,
        }),
      );
    }
  }

  @Post('verify-code')
  @UsePipes(new JoiValidationPipe(VerifyTokenSchema))
  async verifyToken(
    @Res({ passthrough: true }) response: Response,
    @Body() verifyTokenDTO: VerifyTokenDTO,
  ) {
    try {
      const result = await this.authService.verifyToken(verifyTokenDTO);
      response.status(result.status).json(result);
    } catch (e) {
      response.status(HttpStatus.BAD_REQUEST).json(
        new RestResponse({
          status: HttpStatus.BAD_REQUEST,
          message: e.message,
        }),
      );
    }
  }

  @Post('reset-password')
  @UsePipes(new JoiValidationPipe(ResetPasswordSchema))
  async resetPassword(
    @Body() resetPasswordDTO: ResetPasswordDTO,
    @Res({ passthrough: true }) response: Response,
  ) {
    try {
      const result = await this.authService.resetPassword(resetPasswordDTO);
      response.status(result.status).json(result);
    } catch (e) {
      response.status(HttpStatus.BAD_REQUEST).json(
        new RestResponse({
          status: HttpStatus.BAD_REQUEST,
          message: e.message,
        }),
      );
    }
  }

  @Post('check-email-phone')
  @UsePipes(new JoiValidationPipe(CheckEmailPhoneSchema))
  async checkEmailPhone(
    @Res({ passthrough: true }) response: Response,
    @Body() checkEmailPhoneDTO: CheckEmailPhoneDTO,
  ) {
    try {
      const result = await this.authService.checkEmailPhone(checkEmailPhoneDTO);
      response.status(result.status).json(result);
    } catch (e) {
      response.status(HttpStatus.BAD_REQUEST).json(
        new RestResponse({
          status: HttpStatus.BAD_REQUEST,
          message: e.message,
        }),
      );
    }
  }

  @UseGuards(JwtAuthGuard)
  @Get('log-out')
  @UsePipes()
  async logOut(
    @Res({ passthrough: true }) response: Response,
    @Req() request: Request,
  ) {
    try {
      const user = request['user'];
      const result = await this.authService.logOut(user.id);
      response.status(result.status).json(result);
    } catch (e) {
      response.status(HttpStatus.BAD_REQUEST).json(
        new RestResponse({
          status: HttpStatus.BAD_REQUEST,
          message: e.message,
        }),
      );
    }
  }
}
