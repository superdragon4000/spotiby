import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Example extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column()
  name: string;
}

export default Example;