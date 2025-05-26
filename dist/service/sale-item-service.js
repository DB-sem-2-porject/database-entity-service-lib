import { AppDataSource } from '../data-source.js';
import { SaleItem } from '../entity/sale-item.js';
export class SaleItemService {
    repository = AppDataSource.getRepository(SaleItem);
    async createSaleItem(data) {
        const saleItem = this.repository.create(data);
        return this.repository.save(saleItem);
    }
    async deleteSaleItem(data) {
        await this.repository.delete(data.id);
    }
}
