import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('country', ['country'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_user_address', { schema: 'teesas' })
export class TblUserAddress {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'name' })
  name: number;

  @Column('varchar', { name: 'email', length: 250 })
  email: string;

  @Column('int', { name: 'phone_no' })
  phoneNo: number;

  @Column('varchar', { name: 'address', length: 250 })
  address: string;

  @Column('varchar', { name: 'country', length: 250 })
  country: string;

  @Column('varchar', { name: 'city', length: 250 })
  city: string;

  @Column('varchar', { name: 'post_code', length: 250 })
  postCode: string;

  @Column('timestamp', { name: 'created' })
  created: Date;
}
