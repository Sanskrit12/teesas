import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_card_details', { schema: 'teesas' })
export class TblCardDetails {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('bigint', { name: 'card_number' })
  cardNumber: string;

  @Column('varchar', { name: 'expired_date', length: 255 })
  expiredDate: string;

  @Column('varchar', { name: 'card_type', length: 255 })
  cardType: string;

  @Column('timestamp', {
    name: 'created_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;
}
