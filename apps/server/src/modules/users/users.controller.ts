import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  UseGuards,
} from '@nestjs/common';
import { BaseService } from '../base/base.service';
import { CreateUserDto } from 'types';
import { UpdateUserDto } from 'types';
import { UserModel } from './user.model';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Public } from '../base/public.decorator';
import { AuthGuard } from '../auth/auth.guard';

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
