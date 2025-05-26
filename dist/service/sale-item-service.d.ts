import { SaleItem } from '../entity/sale-item.js';
export declare class SaleItemService {
    private repository;
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