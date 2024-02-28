import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_skip_users', { schema: 'teesas' })
export class TblSkipUsers {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'adate', length: 250 })
  adate: string;

  @Column('varchar', { name: 'name', length: 250 })
  name: string;

  @Column('varchar', { name: 'country_code', length: 250 })
  countryCode: string;

  @Column('varchar', { name: 'mobile', length: 250 })
  mobile: string;

  @Column('varchar', { name: 'email', length: 250 })
  email: string;

  @Column('varchar', { name: 'gender', length: 250 })
  gender: string;

  @Column('varchar', { name: 'birthday', length: 250 })
  birthday: string;

  @Column('int', { name: 'country_id' })
  countryId: number;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
