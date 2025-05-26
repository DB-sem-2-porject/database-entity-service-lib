import { ProductDirectory } from '../entity/product-directory.js';
export class ProductDirectoryService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(ProductDirectory);
    }
    async createProduct(data) {
        const product = this.repository.create(data);
        return this.repository.save(product);
    }
    async deleteProduct(id) {
        await this.repository.delete(id);
    }
}
