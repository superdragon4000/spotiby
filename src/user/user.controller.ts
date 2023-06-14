import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import User from 'src/model/user.entity';
import CreateUserDto from './dto/create-user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('create')
  @HttpCode(HttpStatus.CREATED)
  createUser(@Body() createUserDto: CreateUserDto): Promise<User | HttpStatus> {
    return this.userService.create(createUserDto);
  }
}
