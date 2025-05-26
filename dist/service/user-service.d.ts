import { User } from '../entity/user.js';
import { DataSource } from "typeorm";
export declare class UserService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
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