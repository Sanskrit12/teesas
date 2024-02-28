import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_icon', { schema: 'teesas' })
export class TblIcon {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'icon', length: 255 })
  icon: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
