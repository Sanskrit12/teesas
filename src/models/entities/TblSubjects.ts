import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('class_id', ['classId'], {})
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

  @Column('varchar', { name: 'class_id', length: 255 })
  classId: string;

  @Column('varchar', { name: 'icon_id', length: 255 })
  iconId: string;

  @Column('varchar', { name: 'color_code_gradiant', length: 255 })
  colorCodeGradiant: string;

  @Column('varchar', { name: 'color_plat_id', length: 255 })
  colorPlatId: string;

  @Column('int', { name: 's_no' })
  sNo: number;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
