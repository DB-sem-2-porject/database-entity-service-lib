import { AppDataSource } from '../data-source.js';
import { ProductRequestItem } from '../entity/product-request-item.js';
export class ProductRequestItemService {
    repository = AppDataSource.getRepository(ProductRequestItem);
    async createRequestItem(data) {
        const requestItem = this.repository.create(data);
        return this.repository.save(requestItem);
    }
    async deleteRequestItem(data) {
        await this.repository.delete(data.id);
    }
}
