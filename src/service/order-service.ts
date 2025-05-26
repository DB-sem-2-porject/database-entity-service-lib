import { Order } from '../entity/order.js';
import {Provider} from "../entity/provider.js";
import {OrderStatus} from "../entity/enum/order-status.js";
import {DataSource, Repository} from "typeorm";

export class OrderService {
  private dataSource: DataSource;
  private repository : Repository<Order>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(Order);
  }
  
  async createOrder(data: {
    provider: Provider;
    orderDate?: Date;
    status?: OrderStatus;
    totalCost?: number;
    notes?: string;
  }): Promise<Order> {
    const order = this.repository.create({
      ...data,
      orderDate: data.orderDate || new Date()
    });
    return this.repository.save(order);
  }
  
  async deleteOrder(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}