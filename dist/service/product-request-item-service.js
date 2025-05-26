import { ProductRequestItem } from '../entity/product-request-item.js';
export class ProductRequestItemService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(ProductRequestItem);
    }
    async createRequestItem(data) {
        const requestItem = this.repository.create(data);
        return this.repository.save(requestItem);
    }
    async deleteRequestItem(data) {
        await this.repository.delete(data.id);
    }
}
