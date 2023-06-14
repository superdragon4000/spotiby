import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  ADMIN = "admin",
  EDITOR = "editor",
  ARTIST = "artist",
  USER = "user"
}

export enum UserStatus {
  ACTIVATED = "activated",
  BLOCKED = "blocked",
  UNACTIVATED = "unactivated"
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

  @Column({
    type: "enum",
    enum: UserStatus,
    default: UserStatus.UNACTIVATED
  })
  status: UserStatus;
}

export default User;