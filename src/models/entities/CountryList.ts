import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Entity('country_list', { schema: 'teesas' })
export class CountryList {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'country', nullable: true, length: 100 })
  country: string | null;

  @Column('varchar', { name: 'country_code', length: 255 })
  countryCode: string;

  @Column('varchar', { name: 'dialing_code', nullable: true, length: 255 })
  dialingCode: string | null;

  @Column('varchar', { name: 'currency', nullable: true, length: 100 })
  currency: string | null;

  @Column('varchar', { name: 'code', nullable: true, length: 100 })
  code: string | null;

  @Column('varchar', { name: 'symbol', nullable: true, length: 100 })
  symbol: string | null;

  @Column('varchar', { name: 'price_rate', length: 255 })
  priceRate: string;
}
