import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('media_type', ['mediaType'], {})
@Index('s_no', ['sNo'], {})
@Index('topic_id', ['topicId'], {})
@Entity('tbl_topic_media', { schema: 'teesas' })
export class TblTopicMedia {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', nullable: true, length: 255 })
  title: string | null;

  @Column('varchar', { name: 'media_type', nullable: true, length: 250 })
  mediaType: string | null;

  @Column('text', { name: 'description', nullable: true })
  description: string | null;

  @Column('varchar', { name: 'video_type', nullable: true, length: 255 })
  videoType: string | null;

  @Column('varchar', { name: 'video', nullable: true, length: 255 })
  video: string | null;

  @Column('varchar', { name: 'topic_id', nullable: true, length: 255 })
  topicId: string | null;

  @Column('varchar', { name: 'thumbnail', nullable: true, length: 255 })
  thumbnail: string | null;

  @Column('varchar', { name: 'subtitle_file', nullable: true, length: 255 })
  subtitleFile: string | null;

  @Column('int', { name: 's_no', nullable: true })
  sNo: number | null;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
