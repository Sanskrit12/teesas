import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_spend_time', { schema: 'teesas' })
export class TblSpendTime {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('varchar', { name: 'content_type', length: 255 })
  contentType: string;

  @Column('int', { name: 'content_id' })
  contentId: number;

  @Column('varchar', { name: 'spend_time', length: 255 })
  spendTime: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
