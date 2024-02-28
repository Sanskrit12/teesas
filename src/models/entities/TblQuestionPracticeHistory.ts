import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('option_id', ['optionId'], {})
@Index('practice_id', ['practiceId'], {})
@Index('question_id', ['questionId'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_question_practice_history', { schema: 'teesas' })
export class TblQuestionPracticeHistory {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('int', { name: 'practice_id', nullable: true })
  practiceId: number | null;

  @Column('int', { name: 'question_id', nullable: true })
  questionId: number | null;

  @Column('int', { name: 'option_id', nullable: true })
  optionId: number | null;

  @Column('int', { name: 'is_correct_key', nullable: true })
  isCorrectKey: number | null;

  @Column('varchar', { name: 'time', length: 255 })
  time: string;

  @Column('int', { name: 'user_id', nullable: true })
  userId: number | null;
}
