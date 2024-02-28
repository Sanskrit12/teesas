import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('notification_id', ['notificationId'], {})
@Index('user_id', ['userId'], {})
@Index('user_id_2', ['userId'], {})
@Index('user_id_3', ['userId'], {})
@Entity('tbl_notification', { schema: 'teesas' })
export class TblNotification {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id', nullable: true, default: '0' })
  userId: number | null;

  @Column('varchar', { name: 'notification_type', nullable: true, length: 250 })
  notificationType: string | null;

  @Column('int', { name: 'notification_id', nullable: true })
  notificationId: number | null;

  @Column('varchar', { name: 'title', nullable: true, length: 250 })
  title: string | null;

  @Column('text', { name: 'message', nullable: true })
  message: string | null;

  @Column('timestamp', {
    name: 'created_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;

  @Column('text', { name: 'response' })
  response: string;
}
