import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { States } from './States';

@Entity('countries', { schema: 'teesas' })
export class Countries {
  @PrimaryGeneratedColumn({ type: 'bigint', name: 'id', unsigned: true })
  id: string;

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

  @OneToMany(() => States, (states) => states.country)
  states: States[];
}
