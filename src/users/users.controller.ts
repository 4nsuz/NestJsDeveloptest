import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get(':role')
  findAll(@Param('role') role: string) {
    return this.usersService.findAll(role);
  }

  @Get('/idFind/:id')
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(+id);
  }

  @Get('/username/:username')
  userFindOne(@Param('username') username: string) {
    return this.usersService.userFindOne(username);
  }

  @Get('/login/:username/:password')
  userLogin(@Param('username') username: string ,@Param('password') password: string,) {
    return this.usersService.userLogin(username,password);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
