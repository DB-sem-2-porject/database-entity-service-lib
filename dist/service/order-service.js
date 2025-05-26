import { Order } from '../entity/order.js';
export class OrderService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(Order);
    }
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
