import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_user_badges', { schema: 'teesas' })
export class TblUserBadges {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'user_id' })
  userId: number;

  @Column('int', { name: 'badge_id' })
  badgeId: number;

  @Column('varchar', { name: 'content', length: 255 })
  content: string;

  @Column('timestamp', {
    name: 'create_time',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createTime: Date;
}
