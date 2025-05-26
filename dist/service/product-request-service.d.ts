import { ProductRequest } from '../entity/product-request.js';
import { TradingPoint } from "../entity/trading-point.js";
import { Employee } from "../entity/employee.js";
import { ProcurementRequestStatus } from "../entity/enum/procurement_request_status.js";
export declare class ProductRequestService {
    private repository;
    createRequest(data: {
        tradingPoint: TradingPoint;
        employee: Employee;
        requestDate?: Date;
        status?: ProcurementRequestStatus;
    }): Promise<ProductRequest>;
    deleteRequest(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=product-request-service.d.ts.map