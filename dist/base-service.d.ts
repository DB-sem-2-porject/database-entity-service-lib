import { DataSource, FindOptionsWhere, Repository, DeepPartial } from "typeorm";
export declare abstract class BaseService<T extends {
    id: number;
}> {
    protected repository: Repository<T>;
    protected dataSource: DataSource;
    protected constructor(dataSource: DataSource, entity: new () => T);
    protected getWhereConditions(conditions: FindOptionsWhere<T> | T | T[]): Promise<FindOptionsWhere<T>>;
    create(data: DeepPartial<T>): Promise<T>;
    read(where: FindOptionsWhere<T>): Promise<T[]>;
    update(conditions: FindOptionsWhere<T> | T | T[], updateData: DeepPartial<T>): Promise<T[]>;
    delete(conditions: FindOptionsWhere<T> | T | T[]): Promise<void>;
}
//# sourceMappingURL=base-service.d.ts.map