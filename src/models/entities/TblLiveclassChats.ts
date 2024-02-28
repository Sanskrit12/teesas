import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('liveclass_id', ['liveclassId'], {})
@Index('parent_id', ['parentId'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_liveclass_chats', { schema: 'teesas' })
export class TblLiveclassChats {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'liveclass_id' })
  liveclassId: number;

  @Column('text', { name: 'message' })
  message: string;

  @Column('timestamp', { name: 'time', default: () => 'CURRENT_TIMESTAMP' })
  time: Date;

  @Column('enum', { name: 'parent_id', enum: ['0', '1'], default: '0' })
  parentId: '0' | '1';

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('varchar', { name: 'user_type', nullable: true, length: 45 })
  userType: string | null;
}
