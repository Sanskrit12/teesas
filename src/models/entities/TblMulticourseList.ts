import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('country_id', ['countryId'], {})
@Index('course_id', ['courseId'], {})
@Index('id', ['id'], {})
@Entity('tbl_multicourse_list', { schema: 'teesas' })
export class TblMulticourseList {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'country_id' })
  countryId: number;

  @Column('int', { name: 'course_id' })
  courseId: number;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
