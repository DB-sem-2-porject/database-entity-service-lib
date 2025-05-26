import { Inventory } from '../entity/inventory.js';
import {DataSource, Repository} from "typeorm";

export class InventoryService {
  private dataSource: DataSource;
  private repository : Repository<Inventory>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(Inventory);
  }
  
  async createInventory(data: {
    tradingPointId: number;
    productId: number;
    quantity: number;
    sellingPrice: number;
  }): Promise<Inventory> {
    const inventory = this.repository.create(data);
    return this.repository.save(inventory);
  }
  
  async deleteInventory(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}