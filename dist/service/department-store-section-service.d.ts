import { DepartmentStoreSection } from '../entity/department-store-section.js';
export declare class DepartmentStoreSectionService {
    private repository;
    private tradingPointsRepository;
    createSection(data: {
        tradingPointId: number;
        name: string;
        floorNumber: number;
        managerId?: number;
    }): Promise<DepartmentStoreSection>;
}
//# sourceMappingURL=department-store-section-service.d.ts.map