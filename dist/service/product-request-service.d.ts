import { ProductRequest } from '../entity/product-request.js';
import { TradingPoint } from "../entity/trading-point.js";
import { Employee } from "../entity/employee.js";
import { ProductRequestStatus } from "../entity/enum/product-request-status.js";
export declare class ProductRequestService {
    private repository;
    createRequest(data: {
        tradingPoint: TradingPoint;
        employee: Employee;
        requestDate?: Date;
        status?: ProductRequestStatus;
    }): Promise<ProductRequest>;
    deleteRequest(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=product-request-service.d.ts.map