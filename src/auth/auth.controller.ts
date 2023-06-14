import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import AuthEmailLoginDto from './dto/auth-email-login.dto';
import { LoginResponseType } from 'src/utils/types/auth/login-response.type';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService) {}

    @Post('email/login')
    @HttpCode(HttpStatus.OK)
    public login(@Body() loginDto: AuthEmailLoginDto): Promise<LoginResponseType> {
        return this.authService.valdateLogin(loginDto);
    }
}
