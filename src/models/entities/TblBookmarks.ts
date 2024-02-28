import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_bookmarks', { schema: 'teesas' })
export class TblBookmarks {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'content_type', length: 255 })
  contentType: string;

  @Column('varchar', { name: 'content_id', length: 255 })
  contentId: string;

  @Column('varchar', { name: 'user_id', length: 255 })
  userId: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
