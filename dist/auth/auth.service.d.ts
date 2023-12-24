import { UsersService } from '../users/users.service';
import { User } from '../users/users.service';
export declare class AuthService {
    private usersService;
    constructor(usersService: UsersService);
    signIn(username: string, pass: string): Promise<User>;
}
