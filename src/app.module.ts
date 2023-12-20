import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';


import { Jobmodule } from './job/job.module';
import { Authmodule } from './job/auth/auth.module';
import { AdminController } from './admin/admin.controller';
import { AdminService } from './admin/admin.service';
;



@Module({
  imports: [  ConfigModule.forRoot({
    isGlobal: true,
  }),Jobmodule,
    Authmodule],
  controllers: [AdminController],
  providers: [AdminService],
})

export class AppModule {}
