import { ProviderProductList } from '../entity/provider-product-list.js';
import { BaseService } from "../base-service.js";
export class ProvideProductListService extends BaseService {
    constructor(dataSource) {
        super(dataSource, ProviderProductList);
    }
}
