import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_testimonal', { schema: 'teesas' })
export class TblTestimonal {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('longtext', { name: 'description' })
  description: string;

  @Column('varchar', { name: 'icon', length: 255 })
  icon: string;

  @Column('timestamp', {
    name: 'created_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdDate: Date;
}
