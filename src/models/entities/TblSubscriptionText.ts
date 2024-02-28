import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('class_id', ['classId'], {})
@Entity('tbl_subscription_text', { schema: 'teesas' })
export class TblSubscriptionText {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'class_id' })
  classId: number;

  @Column('text', { name: 'text' })
  text: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
