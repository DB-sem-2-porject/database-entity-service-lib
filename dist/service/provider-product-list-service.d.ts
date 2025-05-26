import { ProviderProductList } from '../entity/provider-product-list.js';
import { DataSource } from "typeorm";
export declare class ProvideProductListService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
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