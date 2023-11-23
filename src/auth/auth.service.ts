import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) { }

    /*
    * sign In function 
    * used by user to log in to the system 
    * before using anoher API
    */

    async signIn(username: string, pass: string): Promise<any> {
        if(username && pass){
            const inputData = {
                username: username
            }
            const user = await this.usersService.userFindOne(inputData);
            if (user?.password !== pass || user?.isActive !== true) {
                throw new UnauthorizedException();
            } else {
                if(user){
                    const payload = { sub: user.id, username: user.username };
                    return {
                        access_token: await this.jwtService.signAsync(payload),
                    };
                }
            }
        }
        throw new UnauthorizedException();
    }
}