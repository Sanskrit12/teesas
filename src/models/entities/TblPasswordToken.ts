import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_password_token', { schema: 'teesas' })
export class TblPasswordToken {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'token', length: 255 })
  token: string;

  @Column('timestamp', { name: 'reset_tme', nullable: true })
  resetTme: Date | null;
}
