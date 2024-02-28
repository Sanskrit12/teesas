import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('stores', { schema: 'teesas' })
export class Stores {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('text', { name: 'plan' })
  plan: string;

  @Column('text', { name: 'description' })
  description: string;

  @Column('text', { name: 'short_description' })
  shortDescription: string;

  @Column('text', { name: 'product_description' })
  productDescription: string;

  @Column('text', { name: 'overview' })
  overview: string;

  @Column('text', { name: 'shipping_policy', nullable: true })
  shippingPolicy: string | null;

  @Column('decimal', { name: 'price', precision: 10, scale: 2 })
  price: string;

  @Column('varchar', { name: 'discount', nullable: true, length: 255 })
  discount: string | null;

  @Column('text', { name: 'image' })
  image: string;

  @Column('varchar', { name: 'plan_id', length: 255 })
  planId: string;

  @Column('tinyint', { name: 'status', width: 1 })
  status: boolean;

  @Column('bigint', { name: 'total_quentity', nullable: true })
  totalQuentity: string | null;

  @Column('text', { name: 'ip_address', nullable: true })
  ipAddress: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
