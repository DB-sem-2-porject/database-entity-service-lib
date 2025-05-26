import { TradingPointHall } from '../entity/trading-point-hall.js';
import { DataSource } from "typeorm";
export declare class TradingPointHallService {
    private dataSource;
    private repository;
    constructor(dataSource: DataSource);
    createHall(data: {
        tradingPointId: number;
        name: string;
        description?: string;
    }): Promise<TradingPointHall>;
    deleteHall(data: {
        id: number;
    }): Promise<void>;
}
//# sourceMappingURL=trading-point-hall-service.d.ts.map