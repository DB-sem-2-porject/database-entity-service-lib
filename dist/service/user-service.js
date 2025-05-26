import { User } from '../entity/user.js';
export class UserService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(User);
    }
    async createUser(data) {
        const user = this.repository.create(data);
        return this.repository.save(user);
    }
    async deleteUser(data) {
        await this.repository.delete(data.id);
    }
}
