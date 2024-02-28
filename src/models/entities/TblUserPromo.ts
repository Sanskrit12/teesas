import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_user_promo', { schema: 'teesas' })
export class TblUserPromo {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'promo_id' })
  promoId: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('timestamp', { name: 'date', default: () => 'CURRENT_TIMESTAMP' })
  date: Date;
}
