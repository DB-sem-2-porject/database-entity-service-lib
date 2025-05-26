import { TradingPointHall } from '../entity/trading-point-hall.js';
export declare class TradingPointHallService {
    private repository;
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