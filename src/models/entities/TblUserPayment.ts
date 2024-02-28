import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('transaction_id', ['transactionId'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_user_payment', { schema: 'teesas' })
export class TblUserPayment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'transaction_id' })
  transactionId: number;

  @Column('float', { name: 'amount', precision: 12 })
  amount: number;

  @Column('timestamp', {
    name: 'created_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;
}
