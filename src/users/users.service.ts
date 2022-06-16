import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ) { }

    allUsers() {
        return this.userRepository.find();
    }

    async user(id: number) {
        const user = await this.userRepository.findOne(id)
        if (!user) {
            throw new NotFoundException();
        }
        return user;
    }

    async addUser(createUserDto: CreateUserDto) {
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
    }

    async updateUser(id: number, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.preload({
            id: +id,
            ...updateUserDto
        });
        if (!user) {
            throw new NotFoundException()
        }
        return this.userRepository.save(user);
    }

    async deleteUser(id: number) {
        const user = await this.user(id);
        return this.userRepository.remove(user);
    }
}
