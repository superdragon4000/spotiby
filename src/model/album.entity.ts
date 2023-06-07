import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Album extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;
}

export default Album;