import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_email_store', { schema: 'teesas' })
export class TblEmailStore {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'email', length: 255 })
  email: string;
}
