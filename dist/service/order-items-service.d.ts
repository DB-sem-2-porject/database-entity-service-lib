import { OrderItem } from '../entity/order-items.js';
import { DataSource } from "typeorm";
export declare class OrderItemsService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createOrderItem(data: {
        orderId: number;
        productId: number;
        quantity: number;
        price: number;
    }): Promise<OrderItem>;
    deleteOrderItem(id: number): Promise<void>;
}
//# sourceMappingURL=order-items-service.d.ts.map