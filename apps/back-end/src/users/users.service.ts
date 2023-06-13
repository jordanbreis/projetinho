import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/user.entity';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private UserModel: Model<User> ){}

  create(createUserDto: CreateUserDto) {
    return this.UserModel.create(createUserDto)
  }

  findAll() {
    return this.UserModel.find()
  }

  findOne(id: string) {
    return this.UserModel.findById(id)
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.UserModel.findByIdAndUpdate(id, updateUserDto)
  }

  remove(id: string) {
    return this.UserModel.findByIdAndRemove(id)
  }
}
