import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleConfigs } from 'src/config/constants';
import { JwtStrategy } from 'src/utils/jwt.strategy';
import { UtilsModule } from '../utils/utils.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature(ModuleConfigs['content'].entities),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get('jwt.secret'),
        signOptions: {
          expiresIn: '30d',
        },
      }),
      inject: [ConfigService],
    }),
    UtilsModule,
  ],
  controllers: [ContentController],
  providers: [ContentService, JwtStrategy],
})
export class ContentModule {}
