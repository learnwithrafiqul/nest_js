import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { hashPassword } from './utils/hash_password';
import { LoginUserDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UsersService {
  constructor(
    private jwtService: JwtService,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) { }


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



  async signIn(loginUserDto: LoginUserDto) {
    const user = await this.findOne(loginUserDto.username);
    if (!user) {
      throw new UnauthorizedException();
    }
    console.log({ user });
    const isMatch = await bcrypt.compare(loginUserDto.password, user.password);
    console.log({ isMatch });

    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }


  async allUsers() {
    const users = this.userRepository.createQueryBuilder('user').select(['user.id', 'user.username']).getMany();
    return users
  }


}
