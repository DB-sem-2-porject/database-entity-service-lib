import { Inventory } from '../entity/inventory.js';
import { DataSource } from "typeorm";
export declare class InventoryService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createInventory(data: {
        tradingPointId: number;
        productId: number;
        quantity: number;
        sellingPrice: number;
    }): Promise<Inventory>;
    deleteInventory(id: number): Promise<void>;
}
//# sourceMappingURL=inventory-service.d.ts.map