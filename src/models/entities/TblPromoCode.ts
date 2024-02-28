import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_promo_code', { schema: 'teesas' })
export class TblPromoCode {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'code_name', length: 255 })
  codeName: string;

  @Column('varchar', { name: 'value', length: 255 })
  value: string;

  @Column('date', { name: 'validity' })
  validity: string;

  @Column('int', { name: 'limit' })
  limit: number;

  @Column('int', { name: 'min_amount' })
  minAmount: number;

  @Column('int', { name: 'max_amount' })
  maxAmount: number;

  @Column('varchar', { name: 'promocode_for', nullable: true, length: 255 })
  promocodeFor: string | null;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
