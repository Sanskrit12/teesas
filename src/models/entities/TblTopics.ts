import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblChapter } from './TblChapter';

// @Index('chapter_id', ['chapterId'], {})
@Index('id', ['id'], {})
@Entity('tbl_topics', { schema: 'teesas' })
export class TblTopics {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @ManyToOne(() => TblChapter, (chapters) => chapters.topics, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'chapter_id' })
  chapters: TblChapter;

  // @Column('varchar', { name: 'chapter_id', length: 255 })
  // chapterId: string;

  @Column('varchar', { name: 'topic_name', length: 255 })
  topicName: string;

  @Column('varchar', { name: 'topic_image', length: 255 })
  topicImage: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
