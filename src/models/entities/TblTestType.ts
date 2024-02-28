import { Column, Entity, Index } from 'typeorm';

@Index('test_type', ['testType'], {})
@Entity('tbl_test_type', { schema: 'teesas' })
export class TblTestType {
  @Column('int', { primary: true, name: 'id' })
  id: number;

  @Column('varchar', { name: 'test_type', length: 255 })
  testType: string;

  @Column('timestamp', { name: 'created', default: () => 'CURRENT_TIMESTAMP' })
  created: Date;
}
