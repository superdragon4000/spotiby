import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Genre extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        unique: true
    })
    title: string;
}

export default Genre;