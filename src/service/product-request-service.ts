import { AppDataSource } from '../data-source.ts';
import { ProductRequest } from '../entity/product-request.ts';
import {TradingPoint} from "../entity/trading-point.ts";
import {Employee} from "../entity/employee.ts";
import {ProcurementRequestStatus} from "../entity/enum/procurement_request_status.ts";

export class ProductRequestService {
  private repository = AppDataSource.getRepository(ProductRequest);
  
  async createRequest(data: {
    tradingPoint: TradingPoint;
    employee: Employee;
    requestDate?: Date;
    status?: ProcurementRequestStatus;
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