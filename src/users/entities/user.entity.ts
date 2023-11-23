import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsNotEmpty,IsString,IsDate } from 'class-validator';

@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()@IsString()
  @Column()
  firstName: string;

  @IsNotEmpty()@IsString()
  @Column()
  lastName: string;
  
  @Column()
  @IsNotEmpty()@IsString()
  username: string;

  @Column()
  @IsNotEmpty()@IsString()
  password: string;

  @Column()@IsDate()
  @IsNotEmpty()
  createdAt: Date;

  @Column()@IsDate()
  @IsNotEmpty()
  updatedAt: Date;

  @Column()@IsString()
  @IsNotEmpty()
  role: string;

  @Column({ default: true })
  isActive: boolean;
}

