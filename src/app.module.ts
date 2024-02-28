import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleConfigs } from './config/constants';
import configuration from './config/configuration';
import { AuthModule } from './modules/auth/auth.module';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        const config = configService.get('database');
        return {
          type: config.type,
          host: config.host,
          port: config.port,
          username: config.user,
          password: config.password,
          database: config.database,
          synchronize: config.synchronize,
          logging: config.logging,
          entities: ModuleConfigs['app'].entities,
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
  ],
})
export class AppModule {}
