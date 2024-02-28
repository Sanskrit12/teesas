import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('device_id', ['deviceId'], {})
@Index('user_id', ['userId'], {})
@Entity('tbl_token', { schema: 'teesas' })
export class TblToken {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'device_id', length: 255 })
  deviceId: string;

  @Column('text', { name: 'token' })
  token: string;

  @Column('enum', { name: 'is_logout', enum: ['0', '1'], default: '0' })
  isLogout: '0' | '1';

  @Column('varchar', { name: 'user_id', nullable: true, length: 255 })
  userId: string | null;
}
