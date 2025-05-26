import { AppDataSource } from '../data-source.ts';
import { Order } from '../entity/order.ts';
import {Provider} from "../entity/provider.ts";
import {OrderStatus} from "../entity/enum/order_status.ts";

export class OrderService {
  private repository = AppDataSource.getRepository(Order);
  
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