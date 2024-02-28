import { Column, Entity, Index } from 'typeorm';

@Index('country_id', ['countryId'], {})
@Index('device_token', ['deviceToken'], {})
@Index('id', ['id'], {})
@Entity('tbl_teacher', { schema: 'teesas' })
export class TblTeacher {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'email', length: 255 })
  email: string;

  @Column('varchar', { name: 'profile', length: 255 })
  profile: string;

  @Column('varchar', { name: 'password', length: 255 })
  password: string;

  @Column('varchar', { name: 'mobile', nullable: true, length: 250 })
  mobile: string | null;

  @Column('enum', {
    name: 'status',
    nullable: true,
    comment: '0 inaction 1 acctive 2 block ',
    enum: ['0', '1', '2'],
  })
  status: '0' | '1' | '2' | null;

  @Column('varchar', { name: 'device_token', nullable: true, length: 250 })
  deviceToken: string | null;

  @Column('varchar', { name: 'device_type', nullable: true, length: 250 })
  deviceType: string | null;

  @Column('timestamp', {
    name: 'create_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column('bigint', { name: 'country_id', nullable: true })
  countryId: string | null;

  @Column('bigint', { name: 'socket_id', nullable: true })
  socketId: string | null;
}
