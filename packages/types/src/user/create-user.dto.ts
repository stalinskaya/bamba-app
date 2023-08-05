import { Role } from "src/auth/role.type";

export class CreateUserDto {
  username: string;
  password: string;
  roles: Role[];
}
