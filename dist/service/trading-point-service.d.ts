import { TradingPoint } from '../entity/trading-point.js';
import { TradingPointType } from '../entity/enum/trading-point-type.js';
export declare class TradingPointService {
    private repository;
    createTradingPoint(data: {
        type: TradingPointType;
        name: string;
        address: string;
        managerId?: number;
    }): Promise<TradingPoint>;
    deleteTradingPoint(id: number): Promise<void>;
}
//# sourceMappingURL=trading-point-service.d.ts.map