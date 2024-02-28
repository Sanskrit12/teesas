import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('practice_id', ['practiceId'], {})
@Index('question', ['question'], { fulltext: true })
@Index('test_id', ['testId'], {})
@Index('topic_id', ['topicId'], {})
@Entity('tbl_question', { schema: 'teesas' })
export class TblQuestion {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'practice_id', nullable: true, length: 255 })
  practiceId: string | null;

  @Column('varchar', { name: 'test_id', nullable: true, length: 255 })
  testId: string | null;

  @Column('longtext', { name: 'question' })
  question: string;

  @Column('varchar', { name: 'question_image', length: 255 })
  questionImage: string;

  @Column('varchar', { name: 'level', nullable: true, length: 250 })
  level: string | null;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('enum', { name: 'is_flag', enum: ['0', '1'], default: '0' })
  isFlag: '0' | '1';

  @Column('varchar', { name: 'topic_id', length: 255 })
  topicId: string;

  @Column('text', { name: 'solution' })
  solution: string;

  @Column('varchar', { name: 'solution_image', length: 255 })
  solutionImage: string;

  @Column('text', { name: 'hint' })
  hint: string;

  @Column('varchar', { name: 'hint_image', length: 255 })
  hintImage: string;

  @Column('int', { name: 'answer' })
  answer: number;
}
