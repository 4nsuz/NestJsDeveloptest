import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-userfind.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /*
    * used to define API path for calling create function 
    * in users.service
    * by : Thanaphat
  */

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  /*
    * used to define API path for findAll function 
    * in users.service
    * by : Thanaphat
  */

  @Get()
  findAll() {
    return this.usersService.findAll();
  }

  /*
    * used to define API path for findOne function 
    * in users.service
    * by : Thanaphat
  */

  @Get('/idFind/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  /*
    * used to define API path for userFindOne function 
    * in users.service
    * by : Thanaphat
  */

  @Post('/finduser')
  userFindOne(@Body() username: FindUserDto) {
    return this.usersService.userFindOne(username);
  }

  /*
    * used to define API path for update function 
    * in users.service
    * not complete
    * by : Thanaphat
  */

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  /*
    * used to define API path for remove function 
    * in users.service
    * by : Thanaphat
  */

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
