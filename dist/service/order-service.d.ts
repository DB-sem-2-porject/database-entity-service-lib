import { Order } from '../entity/order.js';
import { Provider } from "../entity/provider.js";
import { OrderStatus } from "../entity/enum/order-status.js";
export declare class OrderService {
    private repository;
    createOrder(data: {
        provider: Provider;
        orderDate?: Date;
        status?: OrderStatus;
        totalCost?: number;
        notes?: string;
    }): Promise<Order>;
    deleteOrder(id: number): Promise<void>;
}
//# sourceMappingURL=order-service.d.ts.map