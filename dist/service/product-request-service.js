import { ProductRequest } from '../entity/product-request.js';
import { BaseService } from "../base-service.js";
export class ProductRequestService extends BaseService {
    constructor(dataSource) {
        super(dataSource, ProductRequest);
    }
}
