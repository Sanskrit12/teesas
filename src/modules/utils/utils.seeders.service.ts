import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UtilsHelperService } from '../utils/utils.helper.service';
import { CountryList } from 'src/models/entities/CountryList';
import * as countries from '../../utils/countries.json';
import * as packages from '../../utils/packages.json';
import * as classes from '../../utils/classStandard.json';
import { TblCourses } from 'src/models/entities/TblCourses';
import { TblClassStandard } from 'src/models/entities/TblClassStandard';

@Injectable()
export class UtilsSeedersService implements OnApplicationBootstrap {
  constructor(
    private readonly utilsHelperService: UtilsHelperService,
    @InjectRepository(CountryList)
    private countriesRepo: Repository<CountryList>,
    @InjectRepository(TblCourses)
    private coursesRepo: Repository<TblCourses>,
    @InjectRepository(TblClassStandard)
    private classRepo: Repository<TblClassStandard>,
  ) {}

  async onApplicationBootstrap() {
    await this.seedCountries();
    await this.seedCourses();
    await this.seedClass();
  }

  async seedCountries() {
    const count = await this.countriesRepo.count();
    if (count == 0) {
      const data = countries.map((item) => {
        return {
          country: item.country,
          countryCode: item.country_code,
          dialingCode: item.dialing_code,
          currency: item.currency,
          code: item.code,
          symbol: item.symbol,
          priceRate: item.price_rate,
        };
      });
      await this.countriesRepo.save(data);
    }
  }

  async seedCourses() {
    const count = await this.coursesRepo.count();
    if (count == 0) {
      const data = packages.map((item) => {
        return {
          name: item.name,
          countryId: parseInt(item.country_id, 10),
          priority: item.priority,
        };
      });
      await this.coursesRepo.save(data);
    }
  }

  async seedClass() {
    const count = await this.classRepo.count();
    if (count == 0) {
      const data = classes.map((item) => {
        return {
          name: item.name,
          courseId: item.course_id,
        };
      });
      await this.classRepo.save(data);
    }
  }
}
