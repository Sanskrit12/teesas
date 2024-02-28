import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('exam_preparation', { schema: 'teesas' })
export class ExamPreparation {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'name', nullable: true, length: 191 })
  name: string | null;

  @Column('varchar', { name: 'email', nullable: true, length: 191 })
  email: string | null;

  @Column('varchar', { name: 'class', nullable: true, length: 191 })
  class: string | null;

  @Column('varchar', { name: 'school_name', nullable: true, length: 191 })
  schoolName: string | null;

  @Column('varchar', { name: 'country_code', nullable: true, length: 191 })
  countryCode: string | null;

  @Column('varchar', { name: 'mobile', nullable: true, length: 191 })
  mobile: string | null;

  @Column('varchar', { name: 'age', nullable: true, length: 191 })
  age: string | null;

  @Column('timestamp', {
    name: 'created_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  createdAt: Date;

  @Column('timestamp', {
    name: 'updated_at',
    default: () => 'CURRENT_TIMESTAMP',
  })
  updatedAt: Date;

  @Column('varchar', { name: 'address', nullable: true, length: 191 })
  address: string | null;
}
