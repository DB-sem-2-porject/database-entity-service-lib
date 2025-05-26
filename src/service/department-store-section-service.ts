import { DepartmentStoreSection } from '../entity/department-store-section.js';
import { TradingPoint } from '../entity/trading-point.js';
import { TradingPointType } from '../entity/enum/trading-point-type.js';
import {DataSource, Repository} from "typeorm";

export class DepartmentStoreSectionService {
  private dataSource: DataSource;
  private repository: Repository<DepartmentStoreSection>;
  private tradingPointsRepository: Repository<TradingPoint>;


  constructor(dataSource: DataSource) {
    this.dataSource = dataSource;
    this.repository = this.dataSource.getRepository(DepartmentStoreSection);
    this.tradingPointsRepository = this.dataSource.getRepository(TradingPoint);
  }

  
  async createSection(data: {
    tradingPointId: number;
    name: string;
    floorNumber: number;
    managerId?: number;
  }): Promise<DepartmentStoreSection> {
    const tradingPoint = await this.tradingPointsRepository.findOneByOrFail({ id: data.tradingPointId });
    
    if (tradingPoint.type !== TradingPointType.DepartmentStore) {
      throw new Error('Sections can only be created in department stores');
    }
    
    const section = this.repository.create({
      name: data.name,
      floorNumber: data.floorNumber,
      tradingPoint: tradingPoint,
      managerId: data.managerId ? { id: data.managerId } as any : undefined,
    });
    
    return this.repository.save(section);
  }
}
