import { ProviderProductList } from '../entity/provider-product-list.js';
export class ProvideProductListService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(ProviderProductList);
    }
    async createProductList(data) {
        const productList = this.repository.create(data);
        return this.repository.save(productList);
    }
    async deleteProductList(data) {
        await this.repository.delete(data.id);
    }
}
