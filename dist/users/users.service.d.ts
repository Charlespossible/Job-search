import { PrismaService } from 'src/prisma/prisma.service';
import { EditUserDto } from './dto';
export type User = any;
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    editUser(userId: number, dto: EditUserDto): Promise<{
        id: number;
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
    }>;
}
