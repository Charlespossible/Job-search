import { Authservice } from "./auth.service";
export declare class Authcontroller {
    private readonly authservice;
    constructor(authservice: Authservice);
    signup(): string;
    signin(): string;
}
