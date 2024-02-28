import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_bank_details', { schema: 'teesas' })
export class TblBankDetails {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'bank_name', length: 255 })
  bankName: string;

  @Column('varchar', { name: 'account_number', length: 255 })
  accountNumber: string;

  @Column('varchar', { name: 'bankcode', length: 255 })
  bankcode: string;

  @Column('varchar', { name: 'account_name', length: 255 })
  accountName: string;

  @Column('text', { name: 'Description' })
  description: string;

  @Column('tinyint', {
    name: 'status',
    comment: '0- Not Publish , 1- Publish',
    default: () => "'1'",
  })
  status: number;

  @Column('varchar', { name: 'country_id', length: 15 })
  countryId: string;
}
