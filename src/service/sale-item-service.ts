import { SaleItem } from '../entity/sale-item.js';
import {DataSource, Repository} from "typeorm";

export class SaleItemService {
  private dataSource: DataSource;
  private repository : Repository<SaleItem>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(SaleItem);
  }
  
  async createSaleItem(data: {
    saleId: number;
    productId: number;
    quantity: number;
    price: number;
  }): Promise<SaleItem> {
    const saleItem = this.repository.create(data);
    return this.repository.save(saleItem);
  }
  
  async deleteSaleItem(data: { id: number }): Promise<void> {
    await this.repository.delete(data.id);
  }
}