import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_parent', { schema: 'teesas' })
export class TblParent {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'user_id', length: 255 })
  userId: string;

  @Column('varchar', { name: 'country_code', nullable: true, length: 255 })
  countryCode: string | null;

  @Column('varchar', { name: 'mobile', nullable: true, length: 255 })
  mobile: string | null;

  @Column('varchar', { name: 'code', length: 255 })
  code: string;

  @Column('varchar', { name: 'email', nullable: true, length: 250 })
  email: string | null;

  @Column('varchar', { name: 'login_type', nullable: true, length: 250 })
  loginType: string | null;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('varchar', { name: 'title', nullable: true, length: 255 })
  title: string | null;

  @Column('varchar', { name: 'name', nullable: true, length: 255 })
  name: string | null;

  @Column('varchar', {
    name: 'parent_country_code',
    nullable: true,
    length: 255,
  })
  parentCountryCode: string | null;

  @Column('varchar', { name: 'parent_mobile', nullable: true, length: 255 })
  parentMobile: string | null;
}
