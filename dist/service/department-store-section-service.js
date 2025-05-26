import { AppDataSource } from '../data-source.js';
import { DepartmentStoreSection } from '../entity/department-store-section.js';
import { TradingPoint } from '../entity/trading-point.js';
import { TradingPointType } from '../entity/enum/trading-point-type.js';
export class DepartmentStoreSectionService {
    repository = AppDataSource.getRepository(DepartmentStoreSection);
    tradingPointsRepository = AppDataSource.getRepository(TradingPoint);
    async createSection(data) {
        const tradingPoint = await this.tradingPointsRepository.findOneByOrFail({ id: data.tradingPointId });
        if (tradingPoint.type !== TradingPointType.DepartmentStore) {
            throw new Error('Sections can only be created in department stores');
        }
        const section = this.repository.create({
            name: data.name,
            floorNumber: data.floorNumber,
            tradingPoint: tradingPoint,
            managerId: data.managerId ? { id: data.managerId } : undefined,
        });
        return this.repository.save(section);
    }
}
