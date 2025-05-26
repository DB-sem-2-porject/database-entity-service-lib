import { Sale } from '../entity/sale.js';
export declare class SaleService {
    private repository;
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