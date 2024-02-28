import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('course_id', ['courseId'], {})
@Index('id', ['id'], {})
@Entity('tbl_class_standard', { schema: 'teesas' })
export class TblClassStandard {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'course_id', length: 255 })
  courseId: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
