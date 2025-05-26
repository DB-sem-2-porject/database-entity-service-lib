import { AppDataSource } from '../data-source.js';
import { TradingPoint } from '../entity/trading-point.js';
import { TradingPointType } from '../entity/enum/trading-point-type.js';

export class TradingPointService {
  private repository = AppDataSource.getRepository(TradingPoint);
  
  async createTradingPoint(data: {
    type: TradingPointType;
    name: string;
    address: string;
    managerId?: number;
  }): Promise<TradingPoint> {
    const tradingPoint = this.repository.create(data);
    return this.repository.save(tradingPoint);
  }
  
  async deleteTradingPoint(id: number): Promise<void> {
    await this.repository.delete(id);
  }
}