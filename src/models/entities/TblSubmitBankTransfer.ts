import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_submit_bank_transfer', { schema: 'teesas' })
export class TblSubmitBankTransfer {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('text', { name: 'file_image' })
  fileImage: string;

  @Column('varchar', { name: 'plan_id', length: 255 })
  planId: string;

  @Column('varchar', { name: 'subscription_id', length: 255 })
  subscriptionId: string;

  @Column('int', { name: 'amount' })
  amount: number;

  @Column('varchar', { name: 'device_id', length: 255 })
  deviceId: string;

  @Column('timestamp', {
    name: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP',
  })
  timestamp: Date;

  @Column('tinyint', {
    name: 'status',
    comment: '0- pending , 1- approved , 2 - rejected',
    width: 1,
  })
  status: boolean;

  @Column('int', { name: 'admin_id', nullable: true })
  adminId: number | null;

  @Column('varchar', { name: 'sales_code', nullable: true, length: 45 })
  salesCode: string | null;

  @Column('varchar', { name: 'bank_id', nullable: true, length: 45 })
  bankId: string | null;

  @Column('varchar', { name: 'account_holder', nullable: true, length: 250 })
  accountHolder: string | null;
}
