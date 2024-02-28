import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('is_completed', ['isCompleted'], {})
@Index('practice_id', ['practiceId'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_user_practice_history', { schema: 'teesas' })
export class TblUserPracticeHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'practice_id', length: 255 })
  practiceId: string;

  @Column('text', { name: 'practice_submit_json' })
  practiceSubmitJson: string;

  @Column('varchar', { name: 'user_id', length: 255 })
  userId: string;

  @Column('enum', {
    name: 'is_completed',
    enum: ['0', '1'],
    default: '0',
  })
  isCompleted: '0' | '1';

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
