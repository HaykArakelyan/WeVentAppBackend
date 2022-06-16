import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }


    @Get()
    allUsers() {
        return this.usersService.allUsers();
    }

    @Get(":id")
    user(@Param("id") id: number) {
        return this.usersService.user(id);
    }

    @Post()
    addUser(@Body() createUserDto: CreateUserDto) {
        return this.usersService.addUser(createUserDto);
    }

    @Patch()
    updateUser(@Param("id") id: number, @Body() updateUserDto: UpdateUserDto) {
        return this.usersService.updateUser(id, updateUserDto);
    }

    @Delete(":id")
    deleteUser(@Param("id") id: number) {
        return this.usersService.deleteUser(id);
    }
}
