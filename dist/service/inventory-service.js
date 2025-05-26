import { Inventory } from '../entity/inventory.js';
export class InventoryService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(Inventory);
    }
    async createInventory(data) {
        const inventory = this.repository.create(data);
        return this.repository.save(inventory);
    }
    async deleteInventory(id) {
        await this.repository.delete(id);
    }
}
