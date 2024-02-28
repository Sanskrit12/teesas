import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('account_id', ['accountId'], {})
@Index('customer_id', ['customerId'], {})
@Index('transaction_id', ['transactionId'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_transaction', { schema: 'teesas' })
export class TblTransaction {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('varchar', { name: 'transaction_id', length: 255 })
  transactionId: string;

  @Column('varchar', { name: 'tx_ref', length: 255 })
  txRef: string;

  @Column('varchar', { name: 'transaction_type', length: 255 })
  transactionType: string;

  @Column('varchar', { name: 'account_id', length: 255 })
  accountId: string;

  @Column('varchar', { name: 'customer_id', length: 255 })
  customerId: string;

  @Column('float', { name: 'amount', precision: 12 })
  amount: number;

  @Column('timestamp', {
    name: 'created_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;

  @Column('longtext', { name: 'row_response_json' })
  rowResponseJson: string;

  @Column('varchar', { name: 'currency', length: 50 })
  currency: string;

  @Column('varchar', { name: 'currency_symbol', length: 50 })
  currencySymbol: string;

  @Column('varchar', { name: 'updated_date', length: 100 })
  updatedDate: string;
}
