import { AppDataSource } from '../data-source.js';
import { Order } from '../entity/order.js';
export class OrderService {
    repository = AppDataSource.getRepository(Order);
    async createOrder(data) {
        const order = this.repository.create({
            ...data,
            orderDate: data.orderDate || new Date()
        });
        return this.repository.save(order);
    }
    async deleteOrder(id) {
        await this.repository.delete(id);
    }
}
