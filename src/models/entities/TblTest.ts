import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('chapter_id', ['chapterId'], {})
@Index('test_type', ['testType'], {})
@Entity('tbl_test', { schema: 'teesas' })
export class TblTest {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'test_name', length: 255 })
  testName: string;

  @Column('varchar', { name: 'test_type', length: 255 })
  testType: string;

  @Column('varchar', { name: 'chapter_id', length: 255 })
  chapterId: string;

  @Column('varchar', { name: 'question_count', length: 255 })
  questionCount: string;

  @Column('varchar', { name: 'time', length: 255 })
  time: string;

  @Column('text', { name: 'instruction' })
  instruction: string;

  @Column('enum', { name: 'status', enum: ['0', '1'] })
  status: '0' | '1';

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
