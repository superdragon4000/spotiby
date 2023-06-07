import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Song extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: string;

    @Column({
        unique: true
    })
    artistName: string;

    @Column()
    producer: string;

    @Column()
    writer: string;

    @Column()
    title: string;

    @Column()
    releaseDate: Date;

    // todo
    @Column()
    genre: string;

    @Column()
    source: string;

    @Column()
    label: string;
}

export default Song;