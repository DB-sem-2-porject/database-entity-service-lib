import { ProductRequest } from '../entity/product-request.js';
import {TradingPoint} from "../entity/trading-point.js";
import {Employee} from "../entity/employee.js";
import {ProductRequestStatus} from "../entity/enum/product-request-status.js";
import {DataSource, Repository} from "typeorm";

export class ProductRequestService {
  private dataSource: DataSource;
  private repository : Repository<ProductRequest>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(ProductRequest);
  }
  
  async createRequest(data: {
    tradingPoint: TradingPoint;
    employee: Employee;
    requestDate?: Date;
    status?: ProductRequestStatus;
  }): Promise<ProductRequest> {
    // const request = this.repository.create({
    //   ...data,
    //   requestDate: data.requestDate || new Date()
    // });
    const request = this.repository.create(data);
    return this.repository.save(request);
  }
  
  async deleteRequest(data: { id: number }): Promise<void> {
    await this.repository.delete(data.id);
  }
}