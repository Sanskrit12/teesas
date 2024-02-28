import { Module } from '@nestjs/common';
import { UtilsService } from './utils.service';
import { UtilsController } from './utils.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ModuleConfigs } from 'src/config/constants';
import { UtilsSeedersService } from './utils.seeders.service';
import { UtilsStorageService } from './utils.storage.service';
import { UtilsHelperService } from './utils.helper.service';
import { UtilsTimezoneService } from './utils.timezone.service';

@Module({
  imports: [TypeOrmModule.forFeature(ModuleConfigs['utils'].entities)],
  controllers: [UtilsController],
  providers: [
    UtilsService,
    UtilsSeedersService,
    UtilsStorageService,
    UtilsHelperService,
    UtilsTimezoneService,
  ],
  exports: [
    UtilsService,
    UtilsTimezoneService,
    UtilsHelperService,
    UtilsStorageService,
  ],
})
export class UtilsModule {}
