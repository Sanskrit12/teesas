import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_news', { schema: 'teesas' })
export class TblNews {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('int', { name: 'class_id', nullable: true, default: '0' })
  classId: number | null;

  @Column('varchar', { name: 'source', length: 255 })
  source: string;

  @Column('varchar', { name: 'image', length: 255 })
  image: string;

  @Column('longtext', { name: 'description' })
  description: string;

  @Column('int', { name: 'class', nullable: true })
  class: number | null;

  @Column('date', { name: 'date' })
  date: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
