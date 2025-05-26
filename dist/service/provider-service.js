import { Provider } from '../entity/provider.js';
export class ProviderService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(Provider);
    }
    async createProvider(data) {
        const provider = this.repository.create(data);
        return this.repository.save(provider);
    }
    async deleteProvider(data) {
        await this.repository.delete(data.id);
    }
}
