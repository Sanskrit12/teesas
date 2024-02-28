import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_cart', { schema: 'teesas' })
export class TblCart {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'book_id' })
  bookId: number;

  @Column('timestamp', {
    name: 'created_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdTime: Date;
}
