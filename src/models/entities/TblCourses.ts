import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('country_id', ['countryId'], {})
@Index('id', ['id'], {})
@Entity('tbl_courses', { schema: 'teesas' })
export class TblCourses {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('int', { name: 'country_id' })
  countryId: number;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('enum', { name: 'status', enum: ['0', '1'], default: '1' })
  status: '0' | '1';

  @Column('varchar', { name: 'priority', nullable: true, length: 45 })
  priority: string | null;
}
