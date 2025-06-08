import {
    DataSource,
    FindOptionsWhere,
    Repository,
    In,
    DeepPartial
} from "typeorm";

export abstract class BaseService<T extends { id: number }> {
    protected repository: Repository<T>;
    protected dataSource: DataSource;

    protected constructor(dataSource: DataSource, entity: new () => T) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(entity);
    }

    protected async getWhereConditions(
        conditions: FindOptionsWhere<T> | T | T[]
    ): Promise<FindOptionsWhere<T>> {
        if (Array.isArray(conditions)) {
            const ids = conditions
                .filter(entity => entity.id)
                .map(entity => entity.id);
            return { id: In(ids) } as FindOptionsWhere<T>;
        }
        if ('id' in conditions) {
            return { id: conditions.id } as FindOptionsWhere<T>;
        }
        return conditions;
    }

    async create(data: DeepPartial<T>): Promise<T> {
        const entity = this.repository.create(data);
        return await this.repository.save(entity);
    }

    async read(where: FindOptionsWhere<T>): Promise<T[]> {
        return this.repository.find({ where });
    }

    async update(
        conditions: FindOptionsWhere<T> | T | T[],
        updateData: DeepPartial<T>
    ): Promise<T[]> {
        const where = await this.getWhereConditions(conditions);
        const entities = await this.read(where);
        const updatedEntities = entities.map(entity => ({
            ...entity,
            ...updateData
        }));
        await this.repository.save(updatedEntities);
        return this.read(where);
    }

    async delete(conditions: FindOptionsWhere<T> | T | T[]): Promise<void> {
        const where = await this.getWhereConditions(conditions);
        await this.repository.delete(where);
    }
}