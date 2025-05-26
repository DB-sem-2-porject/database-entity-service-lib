import { Provider } from '../entity/provider.js';
import {DataSource, Repository} from "typeorm";

export class ProviderService {
  private dataSource: DataSource;
  private repository : Repository<Provider>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(Provider);
  }
  
  async createProvider(data: {
    name: string;
    contactPerson?: string;
    email?: string;
    phone?: string;
    address?: string;
  }): Promise<Provider> {
    const provider = this.repository.create(data);
    return this.repository.save(provider);
  }
  
  async deleteProvider(data: { id: number }): Promise<void> {
    await this.repository.delete(data.id);
  }
}