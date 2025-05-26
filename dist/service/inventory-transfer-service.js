import { InventoryTransfer } from '../entity/inventory-transfer.js';
export class InventoryTransferService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(InventoryTransfer);
    }
    async createTransfer(data) {
        if (data.sourcePointId === data.destinationPointId) {
            throw new Error('Source and destination points must be different');
        }
        const transfer = this.repository.create(data);
        return this.repository.save(transfer);
    }
    async deleteTransfer(id) {
        await this.repository.delete(id);
    }
}
