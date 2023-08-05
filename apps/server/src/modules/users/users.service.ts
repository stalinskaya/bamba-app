import { Injectable } from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { CreateUserDto } from 'types';
import { UpdateUserDto } from 'types';
import { InjectModel } from '@nestjs/mongoose';
import { UserModel } from './user.model';
import { Model } from 'mongoose';

@Injectable()
export class UsersService extends BaseService<
  UserModel,
  CreateUserDto,
  UpdateUserDto
> {
  constructor(
    @InjectModel(UserModel.name) private readonly userModel: Model<UserModel>,
  ) {
    super(userModel);
  }
}
