import { Inventory } from '../entity/inventory.js';
import { BaseService } from "../base-service.js";
export class InventoryService extends BaseService {
    constructor(dataSource) {
        super(dataSource, Inventory);
    }
}
