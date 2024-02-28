import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_tablet_voucher_used', { schema: 'teesas' })
export class TblTabletVoucherUsed {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('varchar', { name: 'code', length: 50 })
  code: string;

  @Column('timestamp', {
    name: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  timestamp: Date;
}
