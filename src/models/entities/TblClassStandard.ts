import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TblCourses } from './TblCourses';
import { TblSubjects } from './TblSubjects';

//@Index('course_id', ['courseId'], {})
@Index('id', ['id'], {})
@Entity('tbl_class_standard', { schema: 'teesas' })
export class TblClassStandard {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @ManyToOne(() => TblCourses, (courses) => courses.class_standard, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'course_id' })
  courses: TblCourses;

  @OneToMany(() => TblSubjects, (subjects) => subjects.class_standard)
  subjects?: TblSubjects;

  // @Column('varchar', { name: 'course_id', length: 255 })
  // courseId: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
