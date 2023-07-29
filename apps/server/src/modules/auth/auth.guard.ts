import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { IS_PUBLIC_KEY } from '../base/public.decorator';
import { AuthService } from './auth.service';
import { Permission, RolePermissions } from './roles/role.type';
import { JwtPayload } from './jwt-payload.type';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly jwtService: JwtService,
    private reflector: Reflector,
    private readonly authService: AuthService,
  ) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const isPublic = this.reflector.getAllAndOverride<boolean>(IS_PUBLIC_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      // 💡 See this condition
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const bearerToken = request.headers['authorization'];
    if (!bearerToken) {
      return false;
    }

    const token = bearerToken.split(' ')[1];
    if (!token) {
      return false;
    }

    const user = this.jwtService.verify(token) as JwtPayload;
    if (!user) {
      return false;
    }

    request.user = user;

    return true;
  }
}
