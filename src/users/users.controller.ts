import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './user.entity';
import { CreateUserDto } from './user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public getUsers() {
    return this.usersService.findAll();
  }

  @Get(':id')
  public getUser(@Param('id', ParseIntPipe) id: number): Promise<Users> {
    return this.usersService.findOne(id);
  }

  @Post()
  public createUser(@Body() body: CreateUserDto): Promise<Users> {
    return this.usersService.createUser(body);
  }
}
