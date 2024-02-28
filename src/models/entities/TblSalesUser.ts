import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_sales_user', { schema: 'teesas' })
export class TblSalesUser {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'sale_code', length: 255 })
  saleCode: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'category', length: 255 })
  category: string;

  @Column('varchar', { name: 'account_number', length: 255 })
  accountNumber: string;

  @Column('varchar', { name: 'bank', length: 255 })
  bank: string;

  @Column('varchar', { name: 'country_name', length: 255 })
  countryName: string;
}
