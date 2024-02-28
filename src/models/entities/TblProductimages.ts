import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl__productimages', { schema: 'teesas' })
export class TblProductimages {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('bigint', { name: 'color_id' })
  colorId: string;

  @Column('text', { name: 'product_id', nullable: true })
  productId: string | null;

  @Column('text', { name: 'image' })
  image: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
