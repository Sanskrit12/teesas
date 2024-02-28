import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Cities } from './Cities';
import { Countries } from './Countries';

@Index('states_country_id_foreign', ['countryId'], {})
@Entity('states', { schema: 'teesas' })
export class States {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

  @Column('bigint', { name: 'country_id', unsigned: true })
  countryId: string;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

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

  @OneToMany(() => Cities, (cities) => cities.state)
  cities: Cities[];

  @ManyToOne(() => Countries, (countries) => countries.states, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE',
  })
  @JoinColumn([{ name: 'country_id', referencedColumnName: 'id' }])
  country: Countries;
}
