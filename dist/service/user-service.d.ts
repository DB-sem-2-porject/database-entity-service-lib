import { User } from '../entity/user.js';
export declare class UserService {
    private repository;
    createUser(data: {
        username: string;
        email: string;
        password: string;
        role?: string;
    }): Promise<User>;
    deleteUser(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=user-service.d.ts.map