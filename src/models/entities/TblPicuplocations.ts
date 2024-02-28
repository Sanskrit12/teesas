import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_picuplocations', { schema: 'teesas' })
export class TblPicuplocations {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'address', length: 255 })
  address: string;

  @Column('varchar', { name: 'phone_no', length: 255 })
  phoneNo: string;

  @Column('enum', {
    name: 'status',
    enum: ['active', 'inactive'],
    default: 'active',
  })
  status: 'active' | 'inactive';

  @Column('timestamp', { name: 'created_at', nullable: true })
  createdAt: Date | null;

  @Column('timestamp', { name: 'updated_at', nullable: true })
  updatedAt: Date | null;
}
