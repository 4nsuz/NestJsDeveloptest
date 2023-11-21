import {
    Body,
    Controller,
    Get,
    HttpCode,
    HttpStatus,
    Post,
    Request,
    UseGuards
} from '@nestjs/common';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { Public } from '../SkipAuth';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @HttpCode(HttpStatus.OK)

    @Public()
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        console.log("diSignIn");
        return this.authService.signIn(signInDto.username, signInDto.password);
    }

    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }
}