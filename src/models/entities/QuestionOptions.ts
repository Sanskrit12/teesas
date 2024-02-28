import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('question_options', { schema: 'teesas' })
export class QuestionOptions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'question' })
  question: number;

  @Column('text', { name: 'option' })
  option: string;

  @Column('varchar', { name: 'option_image', length: 255 })
  optionImage: string;

  @Column('varchar', {
    name: 'is_correct_ans_key',
    nullable: true,
    length: 255,
  })
  isCorrectAnsKey: string | null;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('int', { name: 'test_id', nullable: true })
  testId: number | null;
}
