import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_indomievoucher', { schema: 'teesas' })
export class TblIndomievoucher {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('varchar', { name: 'sales_code', length: 250 })
  salesCode: string;
}
