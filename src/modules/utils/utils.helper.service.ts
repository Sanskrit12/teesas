import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TblUser } from 'src/models/entities/TblUser';
@Injectable()
export class UtilsHelperService {
  constructor(
    @InjectRepository(TblUser) private userRepo: Repository<TblUser>,
  ) {}

  async hashPassword(password) {
    const saltOrRounds = 10;
    return await bcrypt.hash(password, saltOrRounds);
  }

  async comparePassword(password, hash) {
    return await bcrypt.compare(password, hash);
  }

  async getUser(id: number) {
    return await this.userRepo.findOne({
      where: {
        id: id,
      },
      select: {
        id: true,
        socketId: true,
        socialId: true,
        name: true,
        email: true,
        mobile: true,
        password: true,
        status: true,
        created: true,
        lastVisit: true,
      },
    });
  }
}
