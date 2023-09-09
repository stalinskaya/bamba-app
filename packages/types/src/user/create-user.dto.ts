import { Role } from "src/auth/role.type";
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'yaninas' })
  username: string;
  @ApiProperty({ example: '123456' })
  password: string;
  roles: Role[];
}
