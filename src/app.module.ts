import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from './users/entities/user.entity';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/auth.guard';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'database_development',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [{
    provide: APP_GUARD,
    useClass: AuthGuard,
  },AppService],
})

export class AppModule {
  constructor(private dataSource: DataSource) {}
}

