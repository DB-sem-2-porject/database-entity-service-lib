import { AppDataSource } from '../data-source.ts';
import { DepartmentStoreSection } from '../entity/department-store-section.ts';
import { TradingPoint } from '../entity/trading-point.js';
import { TradingPointType } from '../entity/enum/trading-point-type.ts';
import { Employee } from '../entity/employee.js';

export class DepartmentStoreSectionService {
  
  private repository = AppDataSource.getRepository(DepartmentStoreSection);
  private tradingPointsRepository = AppDataSource.getRepository(TradingPoint);
  
  
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
