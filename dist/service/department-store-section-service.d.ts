import { DepartmentStoreSection } from '../entity/department-store-section.js';
import { DataSource } from "typeorm";
export declare class DepartmentStoreSectionService {
    private dataSource;
    private repository;
    private tradingPointsRepository;
    constructor(dataSource: DataSource);
    createSection(data: {
        tradingPointId: number;
        name: string;
        floorNumber: number;
        managerId?: number;
    }): Promise<DepartmentStoreSection>;
}
//# sourceMappingURL=department-store-section-service.d.ts.map