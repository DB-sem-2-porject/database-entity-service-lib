import { Sale } from '../entity/sale.js';
import { DataSource } from "typeorm";
export declare class SaleService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createSale(data: {
        tradingPointId: number;
        employeeId: number;
        saleDate?: Date;
        totalAmount: number;
    }): Promise<Sale>;
    deleteSale(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=sale-service.d.ts.map