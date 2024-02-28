import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('admin_support', { schema: 'teesas' })
export class AdminSupport {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'status', nullable: true, default: '0' })
  status: number | null;

  @Column('enum', {
    name: 'likes',
    enum: ['0', '1', '2'],
    default: '0',
  })
  likes: '0' | '1' | '2';

  @Column('timestamp', {
    name: 'created_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;

  @Column('varchar', { name: 'last_msg_time', length: 255 })
  lastMsgTime: string;
}
