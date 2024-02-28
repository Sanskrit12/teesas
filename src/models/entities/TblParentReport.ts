import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_parent_report', { schema: 'teesas' })
export class TblParentReport {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'parent_id' })
  parentId: number;

  @Column('int', { name: 'report_id' })
  reportId: number;

  @Column('text', { name: 'report_data' })
  reportData: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
