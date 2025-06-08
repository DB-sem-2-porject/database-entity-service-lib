import { TradingPoint } from '../entity/trading-point.js';
import { BaseService } from "../base-service.js";
export class TradingPointService extends BaseService {
    constructor(dataSource) {
        super(dataSource, TradingPoint);
    }
}
