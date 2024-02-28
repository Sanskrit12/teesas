import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_parent_feedback', { schema: 'teesas' })
export class TblParentFeedback {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'parent_id' })
  parentId: number;

  @Column('text', { name: 'message' })
  message: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
