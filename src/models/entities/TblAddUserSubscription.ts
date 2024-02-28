import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_add_user_subscription', { schema: 'teesas' })
export class TblAddUserSubscription {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'transaction_id' })
  transactionId: number;

  @Column('int', { name: 'subscription_id' })
  subscriptionId: number;

  @Column('int', { name: 'class_id_inapp' })
  classIdInapp: number;

  @Column('varchar', { name: 'plan_id_inapp', length: 100 })
  planIdInapp: string;

  @Column('int', { name: 'voucher_id', nullable: true })
  voucherId: number | null;

  @Column('varchar', { name: 'device_id', length: 255 })
  deviceId: string;

  @Column('timestamp', {
    name: 'create_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;

  @Column('varchar', { name: 'inapp_expire_time', length: 255 })
  inappExpireTime: string;

  @Column('enum', {
    name: 'cancel_subscription',
    enum: ['0', '1'],
    default: '0',
  })
  cancelSubscription: '0' | '1';

  @Column('enum', { name: 'status', enum: ['0', '1'] })
  status: '0' | '1';

  @Column('enum', {
    name: 'is_deleted',
    enum: ['0', '1'],
    default: '0',
  })
  isDeleted: '0' | '1';

  @Column('tinyint', { name: 'is_offline_payment', default: '0' })
  isOfflinePayment: number;

  @Column('varchar', { name: 'free_voucher_code', length: 50 })
  freeVoucherCode: string;

  @Column('tinyint', {
    name: 'is_inapp_purchase',
    comment: '0 = others 1 = inapp',
  })
  isInappPurchase: number;

  @Column('tinyint', { name: 'is_manually_payment', default: '0' })
  isManuallyPayment: number;
}
