import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_report_data', { schema: 'teesas' })
export class TblReportData {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', length: 250 })
  title: string;

  @Column('timestamp', {
    name: 'created_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;
}
