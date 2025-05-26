import { AppDataSource } from '../data-source.js';
import { Sale } from '../entity/sale.js';

export class SaleService {
  private repository = AppDataSource.getRepository(Sale);
  
  async createSale(data: {
    tradingPointId: number;
    employeeId: number;
    saleDate?: Date;
    totalAmount: number;
  }): Promise<Sale> {
    const sale = this.repository.create({
      ...data,
      saleDate: data.saleDate || new Date()
    });
    return this.repository.save(sale);
  }
  
  async deleteSale(data: { id: number }): Promise<void> {
    await this.repository.delete(data.id);
  }
}