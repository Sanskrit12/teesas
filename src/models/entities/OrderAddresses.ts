import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order_addresses', { schema: 'teesas' })
export class OrderAddresses {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('bigint', { name: 'userinformation_id', nullable: true })
  userinformationId: string | null;

  @Column('bigint', { name: 'user_id', nullable: true })
  userId: string | null;

  @Column('text', { name: 'type' })
  type: string;

  @Column('bigint', { name: 'order_id' })
  orderId: string;

  @Column('tinyint', { name: 'status', width: 1 })
  status: boolean;

  @Column('text', { name: 'address', nullable: true })
  address: string | null;

  @Column('bigint', { name: 'address_id' })
  addressId: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
