import { SaleItem } from '../entity/sale-item.js';
import { DataSource } from "typeorm";
export declare class SaleItemService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createSaleItem(data: {
        saleId: number;
        productId: number;
        quantity: number;
        price: number;
    }): Promise<SaleItem>;
    deleteSaleItem(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=sale-item-service.d.ts.map