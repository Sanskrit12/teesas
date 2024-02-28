import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_ebbok_comment', { schema: 'teesas' })
export class TblEbbokComment {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'book_id' })
  bookId: number;

  @Column('longtext', { name: 'comment' })
  comment: string;

  @Column('timestamp', { name: 'time', default: () => 'CURRENT_TIMESTAMP' })
  time: Date;
}
