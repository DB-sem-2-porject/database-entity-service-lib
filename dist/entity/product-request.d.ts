import 'reflect-metadata';
import { TradingPoint } from './trading-point.js';
import { Employee } from './employee.js';
import { ProcurementRequestStatus } from './enum/procurement_request_status.js';
export declare class ProductRequest {
    id: number;
    tradingPoint: TradingPoint;
    employee: Employee;
    requestDate?: Date;
    status: ProcurementRequestStatus;
    notes?: boolean;
    constructor(data?: {
        tradingPoint: TradingPoint;
        employee: Employee;
        requestDate?: Date;
        status?: ProcurementRequestStatus;
    });
}
//# sourceMappingURL=product-request.d.ts.map