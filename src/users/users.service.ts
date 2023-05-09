import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { hashPassword } from './utils/hash_password';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async registerUser(createUserDto: CreateUserDto) {
    hashPassword(createUserDto.password);

    const saltOrRounds = 10;
    const hash = await bcrypt.hash(createUserDto.password, saltOrRounds);
    const user = this.userRepository.create({
      username: createUserDto.username,
      password: hash,
    });
    const { password, ...saveUser } = await this.userRepository.save(user);
    return saveUser;
  }

  findOne(username: string) {
    return this.userRepository.findOneBy({ username });
  }
}
