import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('geo_zones', { schema: 'teesas' })
export class GeoZones {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id', unsigned: true })
  id: number;

  @Column('varchar', { name: 'cca2', length: 3 })
  cca2: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;
}
