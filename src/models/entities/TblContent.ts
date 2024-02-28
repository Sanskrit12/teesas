import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_content', { schema: 'teesas' })
export class TblContent {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('text', { name: 'term' })
  term: string;

  @Column('text', { name: 'privacy' })
  privacy: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
