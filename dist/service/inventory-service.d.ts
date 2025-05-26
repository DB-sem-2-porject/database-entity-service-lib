import { Inventory } from '../entity/inventory.js';
export declare class InventoryService {
    private repository;
    createInventory(data: {
        tradingPointId: number;
        productId: number;
        quantity: number;
        sellingPrice: number;
    }): Promise<Inventory>;
    deleteInventory(id: number): Promise<void>;
}
//# sourceMappingURL=inventory-service.d.ts.map