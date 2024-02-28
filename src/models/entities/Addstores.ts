import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('addstores', { schema: 'teesas' })
export class Addstores {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('text', { name: 'ip_address', nullable: true })
  ipAddress: string | null;

  @Column('bigint', { name: 'user_id', nullable: true })
  userId: string | null;

  @Column('bigint', { name: 'product_id' })
  productId: string;

  @Column('bigint', { name: 'total_quentity' })
  totalQuentity: string;

  @Column('bigint', { name: 'class_id' })
  classId: string;

  @Column('bigint', { name: 'color_id' })
  colorId: string;

  @Column('varchar', { name: 'type', length: 255 })
  type: string;

  @Column('tinyint', { name: 'status', width: 1 })
  status: boolean;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
