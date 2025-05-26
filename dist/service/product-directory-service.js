import { AppDataSource } from '../data-source.js';
import { ProductDirectory } from '../entity/product-directory.js';
export class ProductDirectoryService {
    repository = AppDataSource.getRepository(ProductDirectory);
    async createProduct(data) {
        const product = this.repository.create(data);
        return this.repository.save(product);
    }
    async deleteProduct(id) {
        await this.repository.delete(id);
    }
}
