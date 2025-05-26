import { ProductRequestItem } from '../entity/product-request-item.js';
export declare class ProductRequestItemService {
    private repository;
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