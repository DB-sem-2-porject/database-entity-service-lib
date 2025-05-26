import { TradingPoint } from '../entity/trading-point.js';
export class TradingPointService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(TradingPoint);
    }
    async createTradingPoint(data) {
        const tradingPoint = this.repository.create(data);
        return this.repository.save(tradingPoint);
    }
    async deleteTradingPoint(id) {
        await this.repository.delete(id);
    }
}
