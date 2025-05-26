import { ProductDirectory } from '../entity/product-directory.js';
import { MeasurementType } from '../entity/enum/measurement-type.js';
import { ProductCategory } from '../entity/enum/product-category.js';
export declare class ProductDirectoryService {
    private repository;
    createProduct(data: {
        name: string;
        description?: string;
        category?: ProductCategory;
        measurement: MeasurementType;
        createdAt?: Date;
    }): Promise<ProductDirectory>;
    deleteProduct(id: number): Promise<void>;
}
//# sourceMappingURL=product-directory-service.d.ts.map