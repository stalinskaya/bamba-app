import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/modules/auth/roles/role.type';

export class CreateUserDto {
  @ApiProperty({
    example: 'username',
  })
  username: string;
  @ApiProperty({
    example: 'password',
  })
  password: string;
  roles: Role[];
}
