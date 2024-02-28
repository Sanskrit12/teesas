import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_session', { schema: 'teesas' })
export class TblSession {
  @PrimaryGeneratedColumn({ type: 'int', name: 'auto_id' })
  autoId: number;

  @Column('varchar', { name: 'id', nullable: true, length: 225 })
  id: string | null;

  @Column('varchar', { name: 'ip_address', nullable: true, length: 225 })
  ipAddress: string | null;

  @Column('varchar', { name: 'user_agent', nullable: true, length: 225 })
  userAgent: string | null;

  @Column('varchar', { name: 'last_activity', nullable: true, length: 225 })
  lastActivity: string | null;

  @Column('text', { name: 'data', nullable: true })
  data: string | null;

  @Column('varchar', { name: 'timestamp', nullable: true, length: 225 })
  timestamp: string | null;
}
