import { Body, Controller, Post, HttpCode, HttpStatus, Get } from '@nestjs/common';
import User, { UserRole } from 'src/model/user.entity';
import CreateUserDto from './dto/create-user.dto';
import { UserService } from './user.service';
import { Roles } from 'src/roles/roles.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() createUserDto: CreateUserDto): Promise<User | HttpStatus> {
    return this.userService.create(createUserDto);
  }

  @Get('all')
  @Roles(UserRole.ADMIN)
  getUsers(): Promise<User[]> {
    return this.userService.getAll();
  }
}
