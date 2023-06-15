import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import User, { UserRole, UserStatus } from 'src/model/user.entity';
import { Equal, Repository } from 'typeorm';
import CreateUserDto from './dto/create-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<User | HttpStatus> {
    const candidate = await this.userRepository.findOneBy({
      email: Equal(createUserDto.email),
    });
    if (candidate)
      throw new HttpException(
        'Email address is already in use',
        HttpStatus.CONFLICT,
      );

    const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
    return await this.userRepository.save({
      email: createUserDto.email,
      password: hashedPassword,
      name: createUserDto.name,
      role: UserRole.USER,
      status: UserStatus.UNACTIVATED,
    });
  }

  async findOne(email: string): Promise<User | null> {
    return await this.userRepository.findOneBy({
      email: Equal(email),
    });
  }

  async getAll(): Promise<User[]> {
    return await this.userRepository.find({});
  }
}
