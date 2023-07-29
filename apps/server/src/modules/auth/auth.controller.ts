import { Body, Controller, Get, Post, Headers } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/AuthDto';
import { JwtPayload } from './jwt-payload.type';
import { Requestor } from './requestor.decorator';
import { Public } from '../base/public.decorator';
import { Roles } from './roles/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('me')
  @Roles('user')
  me(@Requestor() requestor: JwtPayload) {
    return requestor;
  }

  @Public()
  @Post('register')
  register(@Body() { username, password }: AuthDto) {
    return this.authService.register({
      username: username,
      password: password,
    });
  }

  @Public()
  @Post('login')
  login(@Body() { username, password }: AuthDto) {
    return this.authService.login({
      username: username,
      password: password,
    });
  }
}