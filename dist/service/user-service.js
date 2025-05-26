import { AppDataSource } from '../data-source.js';
import { User } from '../entity/user.js';
export class UserService {
    repository = AppDataSource.getRepository(User);
    async createUser(data) {
        const user = this.repository.create(data);
        return this.repository.save(user);
    }
    async deleteUser(data) {
        await this.repository.delete(data.id);
    }
}
