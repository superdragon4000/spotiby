import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  ARTIST = "artist",
  USER = "user"
}

@Entity()
class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: string;

  @Column({
    nullable: true
  })
  name: string;

  @Column({
    unique: true
  })
  email: string;

  @Column()
  password: string;

  @Column({
    type: "enum",
    enum: UserRole,
    default: UserRole.USER
  })
  role: UserRole;
}

export default User;