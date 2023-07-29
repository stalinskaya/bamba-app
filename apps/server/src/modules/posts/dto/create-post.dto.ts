import { ApiProperty } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({ example: 'Test' })
  name: string;
  authorId: string;
}
