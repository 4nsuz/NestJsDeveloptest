import { IsEmail, IsNotEmpty } from 'class-validator';

export class FindUserDto {
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
}
