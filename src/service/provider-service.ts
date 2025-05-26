import { AppDataSource } from '../data-source.js';
import { Provider } from '../entity/provider.js';

export class ProviderService {
  private repository = AppDataSource.getRepository(Provider);
  
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