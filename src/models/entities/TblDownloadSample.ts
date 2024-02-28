import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_download_sample', { schema: 'teesas' })
export class TblDownloadSample {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'book_id' })
  bookId: number;

  @Column('timestamp', {
    name: 'created_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;
}
