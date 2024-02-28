import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_user_feedback', { schema: 'teesas' })
export class TblUserFeedback {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('varchar', { name: 'message', length: 250 })
  message: string;

  @Column('timestamp', {
    name: 'created_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdTime: Date;
}
