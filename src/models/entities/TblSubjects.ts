import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblClassStandard } from './TblClassStandard';
import { TblChapter } from './TblChapter';

//@Index('class_id', ['classId'], {})
@Index('color_plat_id', ['colorPlatId'], {})
@Index('icon_id', ['iconId'], {})
@Index('id', ['id'], {})
@Index('s_no', ['sNo'], {})
@Entity('tbl_subjects', { schema: 'teesas' })
export class TblSubjects {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @ManyToOne(
    () => TblClassStandard,
    (class_standard) => class_standard.subjects,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn({ name: 'class_id' })
  class_standard: TblClassStandard;

  @OneToMany(() => TblChapter, (chapters) => chapters.subjects)
  chapters?: TblChapter;

  @Column('varchar', { name: 'icon_id', length: 255, nullable: true })
  iconId: string;

  @Column('varchar', {
    name: 'color_code_gradiant',
    length: 255,
    nullable: true,
  })
  colorCodeGradiant: string;

  @Column('varchar', { name: 'color_plat_id', length: 255, nullable: true })
  colorPlatId: string;

  @Column('int', { name: 's_no', nullable: true })
  sNo: number;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
