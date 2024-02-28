import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_ebook_rating', { schema: 'teesas' })
export class TblEbookRating {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'book_id' })
  bookId: number;

  @Column('int', { name: 'rating' })
  rating: number;
}
