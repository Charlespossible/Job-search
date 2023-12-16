import { Injectable } from "@nestjs/common";


@Injectable()
export class Authservice {
  signUp(): string {
    return "I am signed in"
  }

  signin(): string {
    return "I am signed in"
  }
}
