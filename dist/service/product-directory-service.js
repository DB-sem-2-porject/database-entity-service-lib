import { ProductDirectory } from '../entity/product-directory.js';
import { BaseService } from "../base-service.js";
export class ProductDirectoryService extends BaseService {
    constructor(dataSource) {
        super(dataSource, ProductDirectory);
    }
}
