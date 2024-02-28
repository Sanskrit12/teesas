import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('chapter_id', ['chapterId'], {})
@Index('id', ['id'], {})
@Entity('tbl_practice', { schema: 'teesas' })
export class TblPractice {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'chapter_id', length: 255 })
  chapterId: string;

  @Column('varchar', { name: 'parctice_level', length: 255 })
  parcticeLevel: string;

  @Column('varchar', { name: 'practice_icon', length: 255 })
  practiceIcon: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
