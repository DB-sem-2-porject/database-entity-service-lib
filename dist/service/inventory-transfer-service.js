import { InventoryTransfer } from '../entity/inventory-transfer.js';
import { BaseService } from "../base-service.js";
export class InventoryTransferService extends BaseService {
    constructor(dataSource) {
        super(dataSource, InventoryTransfer);
    }
}
