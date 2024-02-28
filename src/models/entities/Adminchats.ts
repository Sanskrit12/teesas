import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('adminchats', { schema: 'teesas' })
export class Adminchats {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'support_id' })
  supportId: number;

  @Column('text', { name: 'message' })
  message: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;

  @Column('varchar', { name: 'file', length: 255 })
  file: string;

  @Column('enum', { name: 'type', enum: ['0', '1', '2'], default: '0' })
  type: '0' | '1' | '2';
}
