import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('orders', { schema: 'teesas' })
export class Orders {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('text', { name: 'ip_address', nullable: true })
  ipAddress: string | null;

  @Column('text', { name: 'user_id', nullable: true })
  userId: string | null;

  @Column('varchar', { name: 'transection', length: 255 })
  transection: string;

  @Column('varchar', { name: 'tx_ref', length: 255 })
  txRef: string;

  @Column('varchar', { name: 'transection_type', length: 255 })
  transectionType: string;

  @Column('varchar', { name: 'image_link', length: 255 })
  imageLink: string;

  @Column('varchar', { name: 'account_id', length: 255 })
  accountId: string;

  @Column('varchar', { name: 'customer_id', length: 255 })
  customerId: string;

  @Column('varchar', { name: 'response', length: 255 })
  response: string;

  @Column('tinyint', { name: 'status', width: 1 })
  status: boolean;

  @Column('bigint', { name: 'amount' })
  amount: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @Column('varchar', { name: 'holder_name', nullable: true, length: 255 })
  holderName: string | null;
}
