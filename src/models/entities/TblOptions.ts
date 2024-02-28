import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Entity('tbl_options', { schema: 'teesas' })
export class TblOptions {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'question', length: 255 })
  question: string;

  @Column('text', { name: 'option1', nullable: true })
  option1: string | null;

  @Column('varchar', { name: 'option1_image', nullable: true, length: 255 })
  option1Image: string | null;

  @Column('text', { name: 'option2', nullable: true })
  option2: string | null;

  @Column('varchar', { name: 'option2_image', nullable: true, length: 255 })
  option2Image: string | null;

  @Column('text', { name: 'option3', nullable: true })
  option3: string | null;

  @Column('varchar', { name: 'option3_image', nullable: true, length: 255 })
  option3Image: string | null;

  @Column('text', { name: 'option4', nullable: true })
  option4: string | null;

  @Column('varchar', { name: 'option4_image', nullable: true, length: 255 })
  option4Image: string | null;

  @Column('text', { name: 'solution', nullable: true })
  solution: string | null;

  @Column('varchar', { name: 'solution_image', nullable: true, length: 255 })
  solutionImage: string | null;

  @Column('text', { name: 'hint', nullable: true })
  hint: string | null;

  @Column('varchar', { name: 'hint_image', nullable: true, length: 255 })
  hintImage: string | null;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('varchar', { name: 'answer', nullable: true, length: 255 })
  answer: string | null;
}
