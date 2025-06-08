import { SaleItem } from '../entity/sale-item.js';
import { BaseService } from "../base-service.js";
export class SaleItemService extends BaseService {
    constructor(dataSource) {
        super(dataSource, SaleItem);
    }
}
