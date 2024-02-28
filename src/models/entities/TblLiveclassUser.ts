import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('live_class_id', ['liveClassId'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_liveclass_user', { schema: 'teesas' })
export class TblLiveclassUser {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'live_class_id' })
  liveClassId: number;

  @Column('varchar', { name: 'start_time', length: 255 })
  startTime: string;

  @Column('varchar', { name: 'end_time', length: 255 })
  endTime: string;

  @Column('int', { name: 'status', nullable: true, default: '0' })
  status: number | null;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('varchar', { name: 'user_type', nullable: true, length: 45 })
  userType: string | null;
}
