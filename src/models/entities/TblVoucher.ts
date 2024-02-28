import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_voucher', { schema: 'teesas' })
export class TblVoucher {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'code', length: 255 })
  code: string;

  @Column('varchar', { name: 'validity', length: 255 })
  validity: string;

  @Column('varchar', { name: 'discount', length: 255 })
  discount: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
