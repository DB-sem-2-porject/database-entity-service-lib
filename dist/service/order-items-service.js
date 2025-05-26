import { OrderItem } from '../entity/order-items.js';
export class OrderItemsService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(OrderItem);
    }
    async createOrderItem(data) {
        const orderItem = this.repository.create(data);
        return this.repository.save(orderItem);
    }
    async deleteOrderItem(id) {
        await this.repository.delete(id);
    }
}
