import { AppDataSource } from '../data-source.js';
import { Inventory } from '../entity/inventory.js';
export class InventoryService {
    repository = AppDataSource.getRepository(Inventory);
    async createInventory(data) {
        const inventory = this.repository.create(data);
        return this.repository.save(inventory);
    }
    async deleteInventory(id) {
        await this.repository.delete(id);
    }
}
