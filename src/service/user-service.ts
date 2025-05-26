import { User } from '../entity/user.js';
import {DataSource, Repository} from "typeorm";

export class UserService {
  private dataSource: DataSource;
  private repository : Repository<User>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(User);
  }
  
  async createUser(data: {
    username: string;
    email: string;
    password: string;
    role?: string;
  }): Promise<User> {
    const user = this.repository.create(data);
    return this.repository.save(user);
  }
  
  async deleteUser(data: { id: number }): Promise<void> {
    await this.repository.delete(data.id);
  }
}