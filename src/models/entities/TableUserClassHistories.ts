import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TableUsers } from './TableUsers';

@Index('table_user_class_histories_table_user_id_foreign', ['tableUserId'], {})
@Entity('table_user_class_histories', { schema: 'teesas' })
export class TableUserClassHistories {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('bigint', { name: 'table_user_id', unsigned: true })
  tableUserId: string;

  @Column('varchar', { name: 'class_id', nullable: true, length: 255 })
  classId: string | null;

  @Column('varchar', { name: 'is_current', length: 255, default: '0' })
  isCurrent: string;

  @Column('varchar', {
    name: 'is_current_parent',
    length: 255,
    default: '0',
  })
  isCurrentParent: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @ManyToOne(
    () => TableUsers,
    (tableUsers) => tableUsers.tableUserClassHistories,
    { onDelete: 'CASCADE', onUpdate: 'NO ACTION' },
  )
  @JoinColumn([{ name: 'table_user_id', referencedColumnName: 'id' }])
  tableUser: TableUsers;
}
