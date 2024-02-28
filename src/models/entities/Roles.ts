import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('role_name', ['roleName'], { unique: true })
@Entity('roles', { schema: 'teesas' })
export class Roles {
  @PrimaryGeneratedColumn({ type: 'int', name: 'role_id' })
  roleId: number;

  @Column('varchar', { name: 'role_name', unique: true, length: 255 })
  roleName: string;

  @Column('text', { name: 'permmisons' })
  permmisons: string;
}
