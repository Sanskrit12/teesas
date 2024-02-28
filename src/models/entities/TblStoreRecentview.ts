import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_store_recentview', { schema: 'teesas' })
export class TblStoreRecentview {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('bigint', { name: 'user_id', nullable: true })
  userId: string | null;

  @Column('text', { name: 'ip_address' })
  ipAddress: string;

  @Column('bigint', { name: 'product_id' })
  productId: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
