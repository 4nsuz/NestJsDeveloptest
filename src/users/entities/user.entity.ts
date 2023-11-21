import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
  
  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  role: string;

  @Column({ default: true })
  isActive: boolean;
}

