import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('option_id', ['optionId'], {})
@Index('question_id', ['questionId'], {})
@Index('test_id', ['testId'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_question_test_history', { schema: 'teesas' })
export class TblQuestionTestHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'test_id' })
  testId: number;

  @Column('int', { name: 'question_id' })
  questionId: number;

  @Column('int', { name: 'option_id' })
  optionId: number;

  @Column('int', { name: 'is_correct_key' })
  isCorrectKey: number;

  @Column('varchar', { name: 'time', length: 255 })
  time: string;

  @Column('int', { name: 'user_id' })
  userId: number;
}
