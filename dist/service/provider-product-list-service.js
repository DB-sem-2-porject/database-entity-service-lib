import { AppDataSource } from '../data-source.js';
import { ProviderProductList } from '../entity/provider-product-list.js';
export class ProvideProductListService {
    repository = AppDataSource.getRepository(ProviderProductList);
    async createProductList(data) {
        const productList = this.repository.create(data);
        return this.repository.save(productList);
    }
    async deleteProductList(data) {
        await this.repository.delete(data.id);
    }
}
