import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_subscription_time', { schema: 'teesas' })
export class TblSubscriptionTime {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'value', length: 250 })
  value: string;

  @Column('timestamp', { name: 'created_date' })
  createdDate: Date;
}
