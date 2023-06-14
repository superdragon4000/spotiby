import { UserRole, UserStatus } from 'src/model/user.entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export default class CreateUserDto {
  name?: string;

  @ApiProperty({ example: 'test1@example.com' })
  @IsNotEmpty()
  @IsEmail()
  email: string | null;

  @ApiProperty()
  @MinLength(6)
  password: string;

  role: UserRole;

  status: UserStatus;
}
