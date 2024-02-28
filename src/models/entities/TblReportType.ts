import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_report_type', { schema: 'teesas' })
export class TblReportType {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
