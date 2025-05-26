import { AppDataSource } from '../data-source.js';
import { TradingPoint } from '../entity/trading-point.js';
export class TradingPointService {
    repository = AppDataSource.getRepository(TradingPoint);
    async createTradingPoint(data) {
        const tradingPoint = this.repository.create(data);
        return this.repository.save(tradingPoint);
    }
    async deleteTradingPoint(id) {
        await this.repository.delete(id);
    }
}
