import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('parent_id', ['parentId'], {})
@Entity('tbl_suggestion', { schema: 'teesas' })
export class TblSuggestion {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'parent_id', length: 255 })
  parentId: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'email', length: 255 })
  email: string;

  @Column('text', { name: 'suggestion' })
  suggestion: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
