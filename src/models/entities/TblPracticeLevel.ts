import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_practice_level', { schema: 'teesas' })
export class TblPracticeLevel {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'icon', length: 255 })
  icon: string;

  @Column('varchar', { name: 'color', length: 255 })
  color: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
