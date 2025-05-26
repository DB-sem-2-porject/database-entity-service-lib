import { AppDataSource } from '../data-source.js';
import { OrderItem } from '../entity/order-items.js';

export class OrderItemsService {
  private repository = AppDataSource.getRepository(OrderItem);
  
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