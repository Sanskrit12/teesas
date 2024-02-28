import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('notification_id', ['notificationId'], {})
@Index('teacher_id', ['teacherId'], {})
@Entity('tbl_teacher_notification', { schema: 'teesas' })
export class TblTeacherNotification {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'teacher_id' })
  teacherId: number;

  @Column('varchar', { name: 'notification_type', length: 255 })
  notificationType: string;

  @Column('int', { name: 'notification_id' })
  notificationId: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'message', length: 255 })
  message: string;

  @Column('timestamp', {
    name: 'created_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdTime: Date;
}
