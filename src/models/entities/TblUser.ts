import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('class_id', ['classId'], {})
@Index('country_id', ['countryId'], {})
@Index('id', ['id'], {})
@Entity('tbl_user', { schema: 'teesas' })
export class TblUser {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'class_id', length: 255, nullable: true })
  classId: string;

  @Column('varchar', { name: 'adate', length: 255, nullable: true })
  adate: string;

  @Column('varchar', { name: 'profile', length: 255, nullable: true })
  profile: string;

  @Column('int', { name: 'otp', nullable: true })
  otp: number;

  @Column('varchar', { name: 'avatar_index', length: 255, nullable: true })
  avatarIndex: string;

  @Column('varchar', { name: 'name', length: 255, nullable: true })
  name: string;

  @Column('varchar', { name: 'country_code', length: 255, nullable: true })
  countryCode: string;

  @Column('varchar', { name: 'mobile', length: 255, nullable: true })
  mobile: string;

  @Column('varchar', { name: 'email', length: 255, nullable: true })
  email: string;

  @Column('varchar', { name: 'gender', length: 255, nullable: true })
  gender: string;

  @Column('varchar', { name: 'birthday', length: 255, nullable: true })
  birthday: string;

  @Column('varchar', { name: 'password', length: 255, nullable: true })
  password: string;

  @Column('varchar', { name: 'password_string', length: 255, nullable: true })
  passwordString: string;

  @Column('int', { name: 'country_id', nullable: true })
  countryId: number;

  @Column('varchar', { name: 'city', length: 255, nullable: true })
  city: string;

  @Column('varchar', { name: 'location', length: 255, nullable: true })
  location: string;

  @Column('varchar', { name: 'lat', length: 255, nullable: true })
  lat: string;

  @Column('varchar', { name: 'lang', length: 255, nullable: true })
  lang: string;

  @Column('varchar', { name: 'location_name', length: 255, nullable: true })
  locationName: string;

  @Column('varchar', { name: 'social_id', length: 255, nullable: true })
  socialId: string;

  @Column('varchar', { name: 'login_type', length: 255, nullable: true })
  loginType: string;

  @Column('varchar', { name: 'profile_complete', length: 255, nullable: true })
  profileComplete: string;

  @Column('boolean', { name: 'is_verified', nullable: true, default: false })
  isVerified: boolean;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('timestamp', {
    name: 'otp_created_at',
    nullable: true,
  })
  otpCreatedAt: Date;

  @Column('varchar', { name: 'device_type', length: 255, nullable: true })
  deviceType: string;

  @Column('varchar', { name: 'device_token', length: 255, nullable: true })
  deviceToken: string;

  @Column('varchar', { name: 'device_id', nullable: true, length: 255 })
  deviceId: string | null;

  @Column('date', { name: 'last_visit', nullable: true })
  lastVisit: string;

  @Column('varchar', { name: 'sales_ref_code', nullable: true, length: 255 })
  salesRefCode: string | null;

  @Column('enum', {
    name: 'status',
    enum: ['0', '1', '2'],
    default: '1',
  })
  status: '0' | '1' | '2';

  @Column('tinyint', {
    name: 'bulk_status',
    //comment: '0- Normal Import , 1- Bulk Import',
    default: '0',
    nullable: true,
  })
  bulkStatus: number;

  @Column('text', { name: 'device_details', nullable: true })
  deviceDetails: string | null;

  @Column('tinyint', { name: 'is_password_setup', nullable: true, width: 1 })
  isPasswordSetup: boolean | null;

  @Column('varchar', { name: 'socket_id', nullable: true, length: 255 })
  socketId: string | null;
}
