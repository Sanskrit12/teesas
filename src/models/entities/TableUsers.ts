import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TableParents } from './TableParents';
import { TableUserClassHistories } from './TableUserClassHistories';

@Entity('table_users', { schema: 'teesas' })
export class TableUsers {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', { name: 'class_id', nullable: true, length: 255 })
  classId: string | null;

  @Column('varchar', { name: 'adate', nullable: true, length: 255 })
  adate: string | null;

  @Column('varchar', { name: 'profile', nullable: true, length: 255 })
  profile: string | null;

  @Column('varchar', { name: 'avtar_index', nullable: true, length: 255 })
  avtarIndex: string | null;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'country_code', length: 255 })
  countryCode: string;

  @Column('varchar', { name: 'mobile', length: 255 })
  mobile: string;

  @Column('varchar', { name: 'email', length: 255 })
  email: string;

  @Column('varchar', { name: 'gender', nullable: true, length: 255 })
  gender: string | null;

  @Column('varchar', { name: 'birthday', nullable: true, length: 255 })
  birthday: string | null;

  @Column('varchar', { name: 'password', length: 255 })
  password: string;

  @Column('varchar', { name: 'password_string', nullable: true, length: 255 })
  passwordString: string | null;

  @Column('varchar', { name: 'country_id', nullable: true, length: 255 })
  countryId: string | null;

  @Column('varchar', { name: 'city', length: 255 })
  city: string;

  @Column('varchar', { name: 'location', nullable: true, length: 255 })
  location: string | null;

  @Column('varchar', { name: 'lat', nullable: true, length: 255 })
  lat: string | null;

  @Column('varchar', { name: 'lang', nullable: true, length: 255 })
  lang: string | null;

  @Column('varchar', { name: 'location_name', nullable: true, length: 255 })
  locationName: string | null;

  @Column('varchar', { name: 'social_id', nullable: true, length: 255 })
  socialId: string | null;

  @Column('varchar', { name: 'login_type', nullable: true, length: 255 })
  loginType: string | null;

  @Column('varchar', { name: 'profile_type', nullable: true, length: 255 })
  profileType: string | null;

  @Column('varchar', { name: 'device_type', nullable: true, length: 255 })
  deviceType: string | null;

  @Column('varchar', { name: 'device_token', nullable: true, length: 255 })
  deviceToken: string | null;

  @Column('varchar', { name: 'device_id', nullable: true, length: 255 })
  deviceId: string | null;

  @Column('date', { name: 'last_visit', nullable: true })
  lastVisit: string | null;

  @Column('varchar', { name: 'status', length: 255, default: () => "'1'" })
  status: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @OneToMany(() => TableParents, (tableParents) => tableParents.tableUser)
  tableParents: TableParents[];

  @OneToMany(
    () => TableUserClassHistories,
    (tableUserClassHistories) => tableUserClassHistories.tableUser,
  )
  tableUserClassHistories: TableUserClassHistories[];
}
