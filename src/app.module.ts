import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';


import { Jobmodule } from './job/job.module';
;



@Module({
  imports: [  ConfigModule.forRoot({
    isGlobal: true,
  }),Jobmodule],
 
})

export class AppModule {}
