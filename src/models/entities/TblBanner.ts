import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_banner', { schema: 'teesas' })
export class TblBanner {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'banner', length: 255 })
  banner: string;

  @Column('longtext', { name: 'description', nullable: true })
  description: string | null;

  @Column('varchar', { name: 'type', length: 45, default: () => "'normal'" })
  type: string;

  @Column('int', { name: 'priority' })
  priority: number;

  @Column('varchar', { name: 'video_type', nullable: true, length: 225 })
  videoType: string | null;

  @Column('text', { name: 'video_url', nullable: true })
  videoUrl: string | null;
}
