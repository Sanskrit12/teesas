import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('seo', ['seo'], { fulltext: true })
@Entity('tbl_ebook', { schema: 'teesas' })
export class TblEbook {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('int', { name: 'subject_id' })
  subjectId: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('longtext', { name: 'dsecription', nullable: true })
  dsecription: string | null;

  @Column('varchar', { name: 'short_des', length: 255 })
  shortDes: string;

  @Column('varchar', { name: 'icon', length: 255 })
  icon: string;

  @Column('varchar', { name: 'source', length: 255 })
  source: string;

  @Column('varchar', { name: 'sample_source', length: 255 })
  sampleSource: string;

  @Column('float', { name: 'price', nullable: true, precision: 12 })
  price: number | null;

  @Column('int', { name: 'discount', default: '0' })
  discount: number;

  @Column('varchar', { name: 'seo', length: 255 })
  seo: string;

  @Column('varchar', { name: 'publisher', nullable: true, length: 11 })
  publisher: string | null;

  @Column('varchar', { name: 'publication', nullable: true, length: 255 })
  publication: string | null;

  @Column('varchar', { name: 'ISBN_no', nullable: true, length: 255 })
  isbnNo: string | null;

  @Column('varchar', { name: 'country_id', length: 255 })
  countryId: string;

  @Column('varchar', { name: 'course_id', nullable: true, length: 255 })
  courseId: string | null;

  @Column('varchar', { name: 'language', length: 11 })
  language: string;

  @Column('timestamp', {
    name: 'publish_date',
    default: () => 'CURRENT_TIMESTAMP',
  })
  publishDate: Date;

  @Column('int', { name: 'status', nullable: true })
  status: number | null;

  @Column('tinyint', { name: 'is_paid', width: 1 })
  isPaid: boolean;
}
