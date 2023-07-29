import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserModel } from './user.model';
import { ApiTags } from '@nestjs/swagger';
import { Public } from '../base/public.decorator';

@Controller('users')
@ApiTags('users')
export class UsersController {
  postService: any;
  constructor(
    private readonly userService: BaseService<
      UserModel,
      CreateUserDto,
      UpdateUserDto
    >,
  ) {}

  @Public()
  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Public()
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDto: UpdateUserDto) {
    return this.userService.update(updateDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
