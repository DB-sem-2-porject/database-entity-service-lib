import { ProductRequestItem } from '../entity/product-request-item.js';
import {DataSource, Repository} from "typeorm";

export class ProductRequestItemService {
  private dataSource: DataSource;
  private repository : Repository<ProductRequestItem>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(ProductRequestItem);
    }
  
  async createRequestItem(data: {
    requestId: number;
    productId: number;
    quantity: number;
  }): Promise<ProductRequestItem> {
    const requestItem = this.repository.create(data);
    return this.repository.save(requestItem);
  }
  
  async deleteRequestItem(data: { id: number }): Promise<void> {
    await this.repository.delete(data.id);
  }
}