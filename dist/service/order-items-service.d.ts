import { OrderItem } from '../entity/order-items.js';
export declare class OrderItemsService {
    private repository;
    createOrderItem(data: {
        orderId: number;
        productId: number;
        quantity: number;
        price: number;
    }): Promise<OrderItem>;
    deleteOrderItem(id: number): Promise<void>;
}
//# sourceMappingURL=order-items-service.d.ts.map