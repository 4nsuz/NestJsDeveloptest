import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    async signIn(username: string, pass: string): Promise<any> {
        console.log("Sign In");
        const inputData = {
            username: username,
            password: pass
        }
        const user = await this.usersService.userFindOne(inputData);
        if (user?.password !== pass || user?.isActive !== true) {
            throw new UnauthorizedException();
        } else {
            const payload = { sub: user.id, username: user.username };
            return {
                access_token: await this.jwtService.signAsync(payload),
            };
        }
    }
}