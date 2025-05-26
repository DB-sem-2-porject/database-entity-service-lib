import { OrderItem } from '../entity/order-items.js';
import {DataSource, Repository} from "typeorm";

export class OrderItemsService {
  private dataSource: DataSource;
  private repository : Repository<OrderItem>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(OrderItem);
  }
  
  async createOrderItem(data: {
    orderId: number;
    productId: number;
    quantity: number;
    price: number;
  }): Promise<OrderItem> {
    const orderItem = this.repository.create(data);
    return this.repository.save(orderItem);
  }
  
  async deleteOrderItem(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}