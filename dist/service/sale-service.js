import { Sale } from '../entity/sale.js';
import { BaseService } from "../base-service.js";
export class SaleService extends BaseService {
    constructor(dataSource) {
        super(dataSource, Sale);
    }
}
