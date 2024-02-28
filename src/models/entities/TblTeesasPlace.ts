import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_teesas_place', { schema: 'teesas' })
export class TblTeesasPlace {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', {
    name: 'type',
    comment: 'news/foryou/testimonials',
    length: 255,
  })
  type: string;

  @Column('varchar', { name: 'banner', length: 255 })
  banner: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('longtext', { name: 'content' })
  content: string;

  @Column('varchar', { name: 'date', length: 255 })
  date: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
