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
  UseGuards,
} from '@nestjs/common';
import { CreatePostDto } from 'types';
import { UpdatePostDto } from 'types';
import { BaseService } from '../base/base.service';
import { PostModel } from './post.model';
import { Roles } from '../auth/roles/roles.decorator';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { Requestor } from '../auth/requestor.decorator';
import { JwtPayload } from 'types';
import { AuthGuard } from '../auth/auth.guard';

@ApiBearerAuth('default')
@UseGuards(AuthGuard)
@ApiTags('posts')
@Controller('posts')
export class PostsController {
  constructor(
    private readonly postService: BaseService<
      PostModel,
      CreatePostDto,
      UpdatePostDto
    >,
  ) {}

  @Get()
  @Roles('user')
  findAll() {
    return this.postService.findAll();
  }

  @Post()
  @Roles('user')
  async create(
    @Requestor() req: JwtPayload,
    @Body() createPostDto: CreatePostDto,
  ) {
    return this.postService.create({
      name: createPostDto.name,
      authorId: req._id,
    });
  }

  @Patch(':id')
  @Roles('user')
  update(@Param('id') id: string, @Body() updateDto: UpdatePostDto) {
    return this.postService.update(updateDto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':id')
  @Roles('admin')
  remove(@Param('id') id: string) {
    return this.postService.remove(id);
  }
}
