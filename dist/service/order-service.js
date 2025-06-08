import { Order } from '../entity/order.js';
import { BaseService } from "../base-service.js";
export class OrderService extends BaseService {
    constructor(dataSource) {
        super(dataSource, Order);
    }
}
