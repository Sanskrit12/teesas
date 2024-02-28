import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_store_deliveryaddresses', { schema: 'teesas' })
export class TblStoreDeliveryaddresses {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('bigint', { name: 'user_id' })
  userId: string;

  @Column('bigint', { name: 'country_id' })
  countryId: string;

  @Column('bigint', { name: 'state_id' })
  stateId: string;

  @Column('bigint', { name: 'city_id' })
  cityId: string;

  @Column('text', { name: 'address' })
  address: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
