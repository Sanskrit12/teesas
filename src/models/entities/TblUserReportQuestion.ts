import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('question_id', ['questionId'], {})
@Index('report_id', ['reportId'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_user_report_question', { schema: 'teesas' })
export class TblUserReportQuestion {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'question_id' })
  questionId: number;

  @Column('int', { name: 'report_id' })
  reportId: number;

  @Column('timestamp', {
    name: 'create_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;
}
