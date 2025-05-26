import { Sale } from '../entity/sale.js';
import {DataSource, Repository} from "typeorm";

export class SaleService {
  private dataSource: DataSource;
  private repository : Repository<Sale>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(Sale);
  }
  
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