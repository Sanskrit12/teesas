import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_ebook_order', { schema: 'teesas' })
export class TblEbookOrder {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'book_id' })
  bookId: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('timestamp', {
    name: 'created_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;
}
