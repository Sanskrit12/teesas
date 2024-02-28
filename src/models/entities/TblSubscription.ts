import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('class_id', ['classId'], {})
@Index('country_id', ['countryId'], {})
@Index('id', ['id'], {})
@Index('plan_id', ['planId'], {})
@Index('plan_id_inapp', ['planIdInapp'], {})
@Entity('tbl_subscription', { schema: 'teesas' })
export class TblSubscription {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'class_id' })
  classId: number;

  @Column('varchar', { name: 'amount', length: 255 })
  amount: string;

  @Column('int', { name: 'discount' })
  discount: number;

  @Column('varchar', { name: 'country_id', length: 255 })
  countryId: string;

  @Column('varchar', { name: 'plan_id', length: 255 })
  planId: string;

  @Column('varchar', { name: 'plan_id_inapp', length: 50 })
  planIdInapp: string;

  @Column('varchar', { name: 'time', length: 255 })
  time: string;

  @Column('varchar', { name: 'description', length: 255 })
  description: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
