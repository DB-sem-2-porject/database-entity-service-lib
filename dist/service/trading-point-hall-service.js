import { TradingPointHall } from '../entity/trading-point-hall.js';
import { BaseService } from "../base-service.js";
export class TradingPointHallService extends BaseService {
    constructor(dataSource) {
        super(dataSource, TradingPointHall);
    }
}
