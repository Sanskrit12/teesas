import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblSubjects } from './TblSubjects';
import { TblTopics } from './TblTopics';

@Index('id', ['id'], {})
@Index('s_no', ['sNo'], {})
// @Index('subject_id', ['subjectId'], {})
@Entity('tbl_chapter', { schema: 'teesas' })
export class TblChapter {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @ManyToOne(() => TblSubjects, (subjects) => subjects.chapters, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'subject_id' })
  subjects: TblSubjects;

  @OneToMany(() => TblTopics, (topics) => topics.chapters)
  topics?: TblTopics;

  // @Column('varchar', { name: 'subject_id', length: 255 })
  // subjectId: string;

  @Column('varchar', { name: 'chapter_name', length: 255 })
  name: string;

  @Column('int', { name: 's_no', nullable: true })
  sNo: number;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
