import { IsNotEmpty } from 'class-validator';

export class CreateUserDto {
    id: number;
    @IsNotEmpty()
    firstName: string;
    @IsNotEmpty()
    lastName: string;
    @IsNotEmpty()
    username: string;
    @IsNotEmpty()
    password: string;
    @IsNotEmpty()
    role: string;
    updatedAt: Date;
    createdAt: Date;
    isActive: boolean;
}
