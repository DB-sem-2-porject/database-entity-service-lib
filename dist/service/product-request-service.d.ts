import { ProductRequest } from '../entity/product-request.js';
import { TradingPoint } from "../entity/trading-point.js";
import { Employee } from "../entity/employee.js";
import { ProductRequestStatus } from "../entity/enum/product-request-status.js";
import { DataSource } from "typeorm";
export declare class ProductRequestService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
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