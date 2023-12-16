import { Controller, Post} from "@nestjs/common";
import { Authservice } from "./auth.service";

@Controller('auth')
export class Authcontroller {
    constructor(private readonly authservice : Authservice) {}

    @Post('signup')
    signup(): string {
        return "Just signed in"
    }
    
    @Post('signin')
    signin(): string {
        return "Just signed in"
    }
}
