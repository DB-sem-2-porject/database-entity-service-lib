import { AppDataSource } from '../data-source.js';
import { Provider } from '../entity/provider.js';
export class ProviderService {
    repository = AppDataSource.getRepository(Provider);
    async createProvider(data) {
        const provider = this.repository.create(data);
        return this.repository.save(provider);
    }
    async deleteProvider(data) {
        await this.repository.delete(data.id);
    }
}
