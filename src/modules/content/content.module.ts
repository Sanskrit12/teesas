import { DashboardService } from 'src/modules/dashboard/dashboard.service';
import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ContentController } from './content.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { jwtConfig, ModuleConfigs } from 'src/utils/constants';
import { UserService } from '../user/user.service';
import { UtilityService } from '../utility/utility.service';

@Module({
  imports: [
    jwtConfig,
    TypeOrmModule.forFeature(ModuleConfigs['content'].entities),
  ],
  controllers: [ContentController],
  providers: [ContentService, UserService, UtilityService, DashboardService],
})
export class ContentModule {}
