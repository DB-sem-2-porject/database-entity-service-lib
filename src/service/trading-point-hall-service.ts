import { TradingPointHall } from '../entity/trading-point-hall.js';
import {DataSource, Repository} from "typeorm";

export class TradingPointHallService {
  private dataSource: DataSource;
  private repository : Repository<TradingPointHall>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(TradingPointHall);
  }
  
  async createHall(data: {
    tradingPointId: number;
    name: string;
    description?: string;
  }): Promise<TradingPointHall> {
    const hall = this.repository.create(data);
    return this.repository.save(hall);
  }
  
  async deleteHall(data: { id: number }): Promise<void> {
    await this.repository.delete(data.id);
  }
}