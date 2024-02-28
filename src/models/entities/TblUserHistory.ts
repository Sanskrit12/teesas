import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('class_id', ['classId'], {})
@Index('content_id', ['contentId'], {})
@Index('content_type', ['contentType'], {})
@Index('id', ['id'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_user_history', { schema: 'teesas' })
export class TblUserHistory {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'class_id', length: 255 })
  classId: string;

  @Column('varchar', { name: 'content_id', length: 255 })
  contentId: string;

  @Column('varchar', { name: 'content_type', length: 255 })
  contentType: string;

  @Column('varchar', { name: 'created', length: 255 })
  created: string;

  @Column('varchar', { name: 'user_id', length: 255 })
  userId: string;

  @Column('varchar', { name: 'view_type', length: 255 })
  viewType: string;
}
