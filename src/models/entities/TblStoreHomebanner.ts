import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_store_homebanner', { schema: 'teesas' })
export class TblStoreHomebanner {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('text', { name: 'image' })
  image: string;

  @Column('text', { name: 'display' })
  display: string;

  @Column('text', { name: 'network' })
  network: string;

  @Column('text', { name: 'memory' })
  memory: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
