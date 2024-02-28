import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_badges', { schema: 'teesas' })
export class TblBadges {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'icon', length: 250 })
  icon: string;

  @Column('varchar', { name: 'title', length: 250 })
  title: string;

  @Column('varchar', { name: 'description', length: 250 })
  description: string;

  @Column('int', { name: 'days' })
  days: number;

  @Column('timestamp', {
    name: 'created_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;
}
