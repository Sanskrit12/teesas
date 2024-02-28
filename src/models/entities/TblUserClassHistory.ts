import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('class_id', ['classId'], {})
@Index('id', ['id'], {})
@Index('is_current', ['isCurrent'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_user_class_history', { schema: 'teesas' })
export class TblUserClassHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'user_id', length: 255 })
  userId: string;

  @Column('varchar', { name: 'class_id', length: 255 })
  classId: string;

  @Column('enum', {
    name: 'is_current',
    enum: ['0', '1'],
    default: '0',
  })
  isCurrent: '0' | '1';

  @Column('enum', {
    name: 'is_current_parent',
    enum: ['0', '1'],
    default: '0',
  })
  isCurrentParent: '0' | '1';

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
