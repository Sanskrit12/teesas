import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('track_number', { schema: 'teesas' })
export class TrackNumber {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'mobile_number', length: 255 })
  mobileNumber: string;

  @Column('varchar', { name: 'status', length: 255 })
  status: string;

  @Column('varchar', { name: 'timestamp', nullable: true, length: 255 })
  timestamp: string | null;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;
}
