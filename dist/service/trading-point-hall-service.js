import { AppDataSource } from '../data-source.js';
import { TradingPointHall } from '../entity/trading-point-hall.js';
export class TradingPointHallService {
    repository = AppDataSource.getRepository(TradingPointHall);
    async createHall(data) {
        const hall = this.repository.create(data);
        return this.repository.save(hall);
    }
    async deleteHall(data) {
        await this.repository.delete(data.id);
    }
}
