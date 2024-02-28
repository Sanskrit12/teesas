import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_donation', { schema: 'teesas' })
export class TblDonation {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'email', length: 255 })
  email: string;

  @Column('varchar', { name: 'phone_no', length: 255 })
  phoneNo: string;

  @Column('varchar', { name: 'country', length: 255 })
  country: string;

  @Column('varchar', { name: 'delivery_type', length: 255 })
  deliveryType: string;

  @Column('varchar', { name: 'pickup_country', length: 255 })
  pickupCountry: string;

  @Column('varchar', { name: 'pickup_email', length: 255 })
  pickupEmail: string;

  @Column('varchar', { name: 'pickup_phone_no', length: 255 })
  pickupPhoneNo: string;

  @Column('varchar', { name: 'device_brand', length: 255 })
  deviceBrand: string;

  @Column('varchar', { name: 'model', length: 255 })
  model: string;

  @Column('varchar', { name: 'opearting_system', length: 255 })
  opeartingSystem: string;

  @Column('text', { name: 'image1' })
  image1: string;

  @Column('text', { name: 'image2' })
  image2: string;

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
