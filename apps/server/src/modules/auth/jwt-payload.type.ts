import { Permission } from './roles/role.type';
import { Role } from './roles/role.type';

export type JwtPayload = {
  _id: string;
  username: string;
  iat: number;
  exp: number;
  roles: Role[];
  permissions: Permission[];
};
