import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_apply_voucher', { schema: 'teesas' })
export class TblApplyVoucher {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'voucher_id' })
  voucherId: number;

  @Column('varchar', { name: 'voucher', length: 250 })
  voucher: string;

  @Column('varchar', { name: 'voucher_validity', length: 250 })
  voucherValidity: string;

  @Column('int', { name: 'status' })
  status: number;

  @Column('timestamp', {
    name: 'create_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;
}
