import { OrderItem } from '../entity/order-items.js';
import { BaseService } from "../base-service.js";
export class OrderItemsService extends BaseService {
    constructor(dataSource) {
        super(dataSource, OrderItem);
    }
}
