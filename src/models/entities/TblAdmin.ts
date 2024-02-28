import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_admin', { schema: 'teesas' })
export class TblAdmin {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'email', length: 255 })
  email: string;

  @Column('varchar', { name: 'password', length: 255 })
  password: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'profile', length: 255 })
  profile: string;

  @Column('varchar', { name: 'role', length: 255 })
  role: string;

  @Column('bigint', { name: 'mobile_no' })
  mobileNo: string;
}
