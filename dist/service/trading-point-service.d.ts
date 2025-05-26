import { TradingPoint } from '../entity/trading-point.js';
import { TradingPointType } from '../entity/enum/trading-point-type.js';
import { DataSource } from "typeorm";
export declare class TradingPointService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createTradingPoint(data: {
        type: TradingPointType;
        name: string;
        address: string;
        managerId?: number;
    }): Promise<TradingPoint>;
    deleteTradingPoint(id: number): Promise<void>;
}
//# sourceMappingURL=trading-point-service.d.ts.map