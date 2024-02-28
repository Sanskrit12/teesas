import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('country_id', ['countryId'], {})
@Index('id', ['id'], {})
@Index('subject_id', ['subjectId'], {})
@Index('teacher_id', ['teacherId'], {})
@Entity('tbl_liveclass', { schema: 'teesas' })
export class TblLiveclass {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'subject_id' })
  subjectId: number;

  @Column('varchar', { name: 'live_class_video', nullable: true, length: 255 })
  liveClassVideo: string | null;

  @Column('varchar', { name: 'display_time', nullable: true, length: 255 })
  displayTime: string | null;

  @Column('varchar', { name: 'class_end_time', nullable: true, length: 255 })
  classEndTime: string | null;

  @Column('varchar', { name: 'cls_start_time', nullable: true, length: 255 })
  clsStartTime: string | null;

  @Column('varchar', { name: 'cls_end_time', nullable: true, length: 255 })
  clsEndTime: string | null;

  @Column('varchar', { name: 'banner', length: 250 })
  banner: string;

  @Column('longtext', { name: 'description' })
  description: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('int', { name: 'seat' })
  seat: number;

  @Column('varchar', { name: 'time', length: 255 })
  time: string;

  @Column('date', { name: 'date' })
  date: string;

  @Column('varchar', { name: 'class_time', length: 250 })
  classTime: string;

  @Column('int', { name: 'teacher_id', nullable: true })
  teacherId: number | null;

  @Column('varchar', { name: 'country_id', length: 255 })
  countryId: string;

  @Column('varchar', { name: 'link', nullable: true, length: 250 })
  link: string | null;

  @Column('enum', { name: 'status', enum: ['0', '1'] })
  status: '0' | '1';

  @Column('enum', { name: 'is_heighlight', nullable: true, enum: ['0', '1'] })
  isHeighlight: '0' | '1' | null;

  @Column('enum', {
    name: 'teacher_start',
    enum: ['0', '1'],
    default: '0',
  })
  teacherStart: '0' | '1';

  @Column('timestamp', {
    name: 'created_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;
}
