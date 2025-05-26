import { ProviderProductList } from '../entity/provider-product-list.js';
import {DataSource, Repository} from "typeorm";

export class ProvideProductListService {
  private dataSource: DataSource;
  private repository : Repository<ProviderProductList>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(ProviderProductList);
  }
  
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