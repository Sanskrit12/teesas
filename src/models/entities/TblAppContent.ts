import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('id', ['id'], {})
@Entity('tbl_app_content', { schema: 'teesas' })
export class TblAppContent {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', length: 255 })
  name: string;

  @Column('longtext', { name: 'terms' })
  terms: string;

  @Column('longtext', { name: 'about' })
  about: string;

  @Column('longtext', { name: 'policy' })
  policy: string;

  @Column('varchar', { name: 'address', length: 255 })
  address: string;

  @Column('varchar', { name: 'contact_no', length: 255 })
  contactNo: string;

  @Column('varchar', { name: 'email', length: 250 })
  email: string;

  @Column('varchar', { name: 'whatsapp', length: 250 })
  whatsapp: string;

  @Column('varchar', { name: 'fb_link', length: 255 })
  fbLink: string;

  @Column('varchar', { name: 'twitter_link', length: 255 })
  twitterLink: string;

  @Column('varchar', { name: 'instagram_link', length: 255 })
  instagramLink: string;

  @Column('varchar', { name: 'linkedin_link', length: 255 })
  linkedinLink: string;

  @Column('varchar', { name: 'youtube_link', length: 255 })
  youtubeLink: string;

  @Column('varchar', { name: 'user_app_version', length: 255 })
  userAppVersion: string;

  @Column('varchar', { name: 'parent_app_version', length: 255 })
  parentAppVersion: string;

  @Column('varchar', { name: 'teacher_app_version', length: 255 })
  teacherAppVersion: string;
}
