import { AppDataSource } from '../data-source.js';
import { Inventory } from '../entity/inventory.js';

export class InventoryService {
  private repository = AppDataSource.getRepository(Inventory);
  
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