import { IsNotEmpty,IsString,IsBoolean } from 'class-validator';

export class CreateUserDto {
    id: number;
    @IsNotEmpty()@IsString()
    firstName: string;
    @IsNotEmpty()@IsString()
    lastName: string;
    @IsNotEmpty()@IsString()
    username: string;
    @IsNotEmpty()@IsString()
    password: string;
    @IsNotEmpty()@IsString()
    role: string;
    updatedAt: Date;
    createdAt: Date;
    isActive: boolean;
    @IsNotEmpty()@IsString()
    accessrole : string;
}
