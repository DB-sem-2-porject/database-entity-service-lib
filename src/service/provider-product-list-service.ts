import { AppDataSource } from '../data-source.js';
import { ProviderProductList } from '../entity/provider-product-list.js';

export class ProvideProductListService {
  private repository = AppDataSource.getRepository(ProviderProductList);
  
  async createProductList(data: {
    providerId: number;
    productId: number;
    price: number;
  }): Promise<ProviderProductList> {
    const productList = this.repository.create(data);
    return this.repository.save(productList);
  }
  
  async deleteProductList(data: { id: number }): Promise<void> {
    await this.repository.delete(data.id);
  }
}