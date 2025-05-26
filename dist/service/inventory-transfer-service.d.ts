import { InventoryTransfer } from '../entity/inventory-transfer.js';
import { TransferStatus } from '../entity/enum/transfer-status.js';
import { DataSource } from "typeorm";
export declare class InventoryTransferService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createTransfer(data: {
        sourcePointId: number;
        destinationPointId: number;
        productId: number;
        quantity: number;
        initiatedById: number;
        approvedById?: number;
        status?: TransferStatus;
    }): Promise<InventoryTransfer>;
    deleteTransfer(id: number): Promise<void>;
}
//# sourceMappingURL=inventory-transfer-service.d.ts.map