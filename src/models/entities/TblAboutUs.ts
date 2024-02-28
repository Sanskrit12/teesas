import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('tbl_about_us', { schema: 'teesas' })
export class TblAboutUs {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('longtext', { name: 'about' })
  about: string;
}
