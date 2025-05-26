import { ProviderProductList } from '../entity/provider-product-list.js';
export declare class ProvideProductListService {
    private repository;
    createProductList(data: {
        providerId: number;
        productId: number;
        price: number;
    }): Promise<ProviderProductList>;
    deleteProductList(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=provider-product-list-service.d.ts.map