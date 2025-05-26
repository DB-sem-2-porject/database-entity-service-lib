import { TradingPointHall } from '../entity/trading-point-hall.js';
export class TradingPointHallService {
    dataSource;
    repository;
    constructor(dataSource) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(TradingPointHall);
    }
    async createHall(data) {
        const hall = this.repository.create(data);
        return this.repository.save(hall);
    }
    async deleteHall(data) {
        await this.repository.delete(data.id);
    }
}
