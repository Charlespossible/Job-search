import { Module } from "@nestjs/common";
import { Authcontroller } from "./auth.controller";
import { Authservice } from "./auth.service";




@Module({
    imports : [],
    controllers : [Authcontroller],
    providers: [Authservice]
   

})
export class Authmodule{}