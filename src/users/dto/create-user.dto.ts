export class CreateUserDto {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    role: string;
    isActive: boolean;
}
