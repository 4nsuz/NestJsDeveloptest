import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-userfind.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) { }

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  findAll() {
      return this.usersRepository.find();
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  userFindOne(findUserDto: FindUserDto) {
    const username = findUserDto.username;
    return this.usersRepository.findOneBy({ username });
  }

  async userLogin(username: string, password: string) {
    const userData = await this.usersRepository.findOneBy({ username });
    const retuData = [{
      id: userData.id,
      username: userData.username,
      firstName: userData.firstName,
      lastName: userData.lastName,
      role: userData.role,      
    }];

    if (userData && userData.password === password) {
      return retuData;
    } else {
      return null;
    }
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
