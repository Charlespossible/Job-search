import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Jobmodule } from './job/job.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';

;



@Module({
  imports: [  ConfigModule.forRoot({
    isGlobal: true,
  }),Jobmodule,
    AuthModule,
    UsersModule,
    PrismaModule],
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
})

export class AppModule {}
