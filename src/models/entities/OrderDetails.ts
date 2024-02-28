import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('order_details', { schema: 'teesas' })
export class OrderDetails {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('text', { name: 'ip_address', nullable: true })
  ipAddress: string | null;

  @Column('text', { name: 'user_id', nullable: true })
  userId: string | null;

  @Column('bigint', { name: 'product_id' })
  productId: string;

  @Column('bigint', { name: 'class_id' })
  classId: string;

  @Column('bigint', { name: 'order_id' })
  orderId: string;

  @Column('text', { name: 'discount' })
  discount: string;

  @Column('decimal', { name: 'price', precision: 10, scale: 2 })
  price: string;

  @Column('tinyint', { name: 'status', width: 1 })
  status: boolean;

  @Column('bigint', { name: 'quantity' })
  quantity: string;

  @Column('bigint', { name: 'color_id' })
  colorId: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
