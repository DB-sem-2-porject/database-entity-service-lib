import 'reflect-metadata';
import { ProductCategory } from './enum/product_category.js';
import { MeasurementType } from './enum/measurement_type.js';
export declare class ProductDirectory {
    id: number;
    name: string;
    description?: string;
    category: ProductCategory;
    measurement: MeasurementType;
    createdAt: Date;
    constructor(data?: {
        name: string;
        description?: string;
        category?: ProductCategory;
        measurement: MeasurementType;
        createdAt?: Date;
    });
}
//# sourceMappingURL=product-directory.d.ts.map