import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_color_plats', { schema: 'teesas' })
export class TblColorPlats {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'color_plat_code', length: 255 })
  colorPlatCode: string;

  @Column('varchar', { name: 'color_plat_image', length: 255 })
  colorPlatImage: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
