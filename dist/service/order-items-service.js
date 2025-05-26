import { AppDataSource } from '../data-source.js';
import { OrderItem } from '../entity/order-items.js';
export class OrderItemsService {
    repository = AppDataSource.getRepository(OrderItem);
    async createOrderItem(data) {
        const orderItem = this.repository.create(data);
        return this.repository.save(orderItem);
    }
    async deleteOrderItem(id) {
        await this.repository.delete(id);
    }
}
