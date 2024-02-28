import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_contact', { schema: 'teesas' })
export class TblContact {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('longtext', { name: 'contact' })
  contact: string;
}
