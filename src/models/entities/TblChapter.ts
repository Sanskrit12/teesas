import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Index('s_no', ['sNo'], {})
@Index('subject_id', ['subjectId'], {})
@Entity('tbl_chapter', { schema: 'teesas' })
export class TblChapter {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'subject_id', length: 255 })
  subjectId: string;

  @Column('varchar', { name: 'chapter_name', length: 255 })
  chapterName: string;

  @Column('int', { name: 's_no' })
  sNo: number;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
