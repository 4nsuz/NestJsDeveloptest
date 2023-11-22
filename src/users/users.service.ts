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

  /*
    * create function 
    * used to create user in to the system 
    * use data format in /dto/create-user.dto to create user
    * by : Thanaphat
  */

  create(createUserDto: CreateUserDto) {
    const jsonObj = createUserDto;
    jsonObj["createdAt"] = new Date();
    jsonObj["updatedAt"] = new Date();
    return this.usersRepository.save(jsonObj);
  }

  /*
    * findAll function 
    * used to find All user in the system 
    * by : Thanaphat
  */

  findAll() {
      return this.usersRepository.find();
  }

  /*
    * findOne function 
    * use id to find one user that match id in the system 
    * by : Thanaphat
  */

  findOne(id: number) {
    return this.usersRepository.findOneBy({ id });
  }

  /*
    * userFindOne function 
    * use username to find one user that match username in the system 
    * by : Thanaphat
  */

  userFindOne(findUserDto: FindUserDto) {
    const username = findUserDto.username;
    return this.usersRepository.findOneBy({ username });
  }

  /*
    * not complete
  */

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  /*
    * remove function 
    * use id to delete user that match id in the system 
    * by : Thanaphat
  */

  async remove(id: number) {
    await this.usersRepository.delete(id);
  }
}
