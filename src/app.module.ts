import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';


import { Jobmodule } from './job/job.module';
import { Authmodule } from './job/auth/auth.module';
;



@Module({
  imports: [  ConfigModule.forRoot({
    isGlobal: true,
  }),Jobmodule,
    Authmodule],
})

export class AppModule {}
