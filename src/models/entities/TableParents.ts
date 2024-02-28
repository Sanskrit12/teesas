import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TableUsers } from './TableUsers';

@Index('table_parents_table_user_id_foreign', ['tableUserId'], {})
@Entity('table_parents', { schema: 'teesas' })
export class TableParents {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('bigint', { name: 'table_user_id', unsigned: true })
  tableUserId: string;

  @Column('varchar', { name: 'country_code', nullable: true, length: 255 })
  countryCode: string | null;

  @Column('varchar', { name: 'mobile', nullable: true, length: 255 })
  mobile: string | null;

  @Column('varchar', { name: 'code', nullable: true, length: 255 })
  code: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 255 })
  email: string | null;

  @Column('varchar', { name: 'login_type', nullable: true, length: 255 })
  loginType: string | null;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;

  @ManyToOne(() => TableUsers, (tableUsers) => tableUsers.tableParents, {
    onDelete: 'CASCADE',
    onUpdate: 'NO ACTION',
  })
  @JoinColumn([{ name: 'table_user_id', referencedColumnName: 'id' }])
  tableUser: TableUsers;
}
