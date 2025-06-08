import { ProductRequestItem } from '../entity/product-request-item.js';
import { BaseService } from "../base-service.js";
export class ProductRequestItemService extends BaseService {
    constructor(dataSource) {
        super(dataSource, ProductRequestItem);
    }
}
