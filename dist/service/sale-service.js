import { AppDataSource } from '../data-source.js';
import { Sale } from '../entity/sale.js';
export class SaleService {
    repository = AppDataSource.getRepository(Sale);
    async createSale(data) {
        const sale = this.repository.create({
            ...data,
            saleDate: data.saleDate || new Date()
        });
        return this.repository.save(sale);
    }
    async deleteSale(data) {
        await this.repository.delete(data.id);
    }
}
