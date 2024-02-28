import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { States } from './States';

@Index('cities_state_id_foreign', ['stateId'], {})
@Entity('cities', { schema: 'teesas' })
export class Cities {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('bigint', { name: 'state_id', unsigned: true })
  stateId: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('decimal', {
    name: 'shipping_price',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  shippingPrice: string | null;

  @Column('decimal', {
    name: 'default_shipping_price',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  defaultShippingPrice: string | null;

  @Column('enum', {
    name: 'status',
    enum: ['active', 'inactive'],
    default: 'active',
  })
  status: 'active' | 'inactive';

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column('timestamp', { name: 'deleted_at', nullable: true })
  deletedAt: Date | null;

  @ManyToOne(() => States, (states) => states.cities, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'state_id', referencedColumnName: 'id' }])
  state: States;
}
