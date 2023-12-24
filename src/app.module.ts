import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Jobmodule } from './job/job.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

;



@Module({
  imports: [  ConfigModule.forRoot({
    isGlobal: true,
  }),Jobmodule,
    AuthModule,
    UsersModule],
  controllers: [AuthController],
  providers: [AuthService],
})

export class AppModule {}
