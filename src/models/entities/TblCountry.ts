import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_country', { schema: 'teesas' })
export class TblCountry {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('char', { name: 'iso', length: 2 })
  iso: string;

  @Column('varchar', { name: 'name', length: 80 })
  name: string;

  @Column('varchar', { name: 'nicename', length: 80 })
  nicename: string;

  @Column('char', { name: 'iso3', nullable: true, length: 3 })
  iso3: string | null;

  @Column('smallint', { name: 'numcode', nullable: true })
  numcode: number | null;

  @Column('int', { name: 'phonecode' })
  phonecode: number;
}
