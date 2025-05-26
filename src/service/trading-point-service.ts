import { TradingPoint } from '../entity/trading-point.js';
import { TradingPointType } from '../entity/enum/trading-point-type.js';
import {DataSource, Repository} from "typeorm";

export class TradingPointService {
  private dataSource: DataSource;
  private repository : Repository<TradingPoint>;

  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(TradingPoint);
  }
  
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