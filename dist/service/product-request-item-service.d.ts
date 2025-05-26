import { ProductRequestItem } from '../entity/product-request-item.js';
import { DataSource } from "typeorm";
export declare class ProductRequestItemService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createRequestItem(data: {
        requestId: number;
        productId: number;
        quantity: number;
    }): Promise<ProductRequestItem>;
    deleteRequestItem(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=product-request-item-service.d.ts.map