import { Sale } from '../entity/sale.js';
export class SaleService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(Sale);
    }
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
