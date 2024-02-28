import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl__productcolors', { schema: 'teesas' })
export class TblProductcolors {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('text', { name: 'color' })
  color: string;

  @Column('bigint', { name: 'product_id' })
  productId: string;

  @Column('bigint', { name: 'quantity' })
  quantity: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
