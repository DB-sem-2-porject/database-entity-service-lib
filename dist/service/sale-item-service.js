import { SaleItem } from '../entity/sale-item.js';
export class SaleItemService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(SaleItem);
    }
    async createSaleItem(data) {
        const saleItem = this.repository.create(data);
        return this.repository.save(saleItem);
    }
    async deleteSaleItem(data) {
        await this.repository.delete(data.id);
    }
}
