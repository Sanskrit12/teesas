import { ConfigService } from '@nestjs/config';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UtilsHelperService } from '../modules/utils/utils.helper.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    private configService: ConfigService,
    private readonly utilsHelperService: UtilsHelperService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('jwt.secret'),
    });
  }

  async validate(user) {
    try {
      const data = await this.utilsHelperService.getUser(user.id);
      if (!data.status) {
        throw new UnauthorizedException();
      }
    } catch (e) {
      throw new UnauthorizedException();
    }
    return user;
  }
}
