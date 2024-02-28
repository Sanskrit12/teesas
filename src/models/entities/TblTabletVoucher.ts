import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_tablet_voucher', { schema: 'teesas' })
export class TblTabletVoucher {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'code', length: 250 })
  code: string;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;

  @Column('varchar', { name: 'validity', length: 250 })
  validity: string;

  @Column('enum', {
    name: 'status',
    comment: '0- not_used , 1 - is_used,',
    enum: ['0', '1'],
    default: '0',
  })
  status: '0' | '1';

  @Column('varchar', {
    name: 'code_used_date',
    comment: 'code used date ',
    length: 250,
  })
  codeUsedDate: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
