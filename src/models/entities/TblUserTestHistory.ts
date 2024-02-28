import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('is_complete', ['isComplete'], {})
@Index('test_id', ['testId'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_user_test_history', { schema: 'teesas' })
export class TblUserTestHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'user_id', length: 255 })
  userId: string;

  @Column('text', { name: 'test_submit_json' })
  testSubmitJson: string;

  @Column('enum', {
    name: 'is_complete',
    enum: ['0', '1'],
    default: '0',
  })
  isComplete: '0' | '1';

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('varchar', { name: 'test_id', length: 255 })
  testId: string;
}
