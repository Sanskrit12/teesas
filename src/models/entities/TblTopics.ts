import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('chapter_id', ['chapterId'], {})
@Index('id', ['id'], {})
@Entity('tbl_topics', { schema: 'teesas' })
export class TblTopics {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'chapter_id', length: 255 })
  chapterId: string;

  @Column('varchar', { name: 'topic_name', length: 255 })
  topicName: string;

  @Column('varchar', { name: 'topic_image', length: 255 })
  topicImage: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
