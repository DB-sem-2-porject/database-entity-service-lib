import { In } from "typeorm";
export class BaseService {
    repository;
    dataSource;
    constructor(dataSource, entity) {
        this.dataSource = dataSource;
        this.repository = this.dataSource.getRepository(entity);
    }
    async getWhereConditions(conditions) {
        if (Array.isArray(conditions)) {
            const ids = conditions
                .filter(entity => entity.id)
                .map(entity => entity.id);
            return { id: In(ids) };
        }
        if ('id' in conditions) {
            return { id: conditions.id };
        }
        return conditions;
    }
    async create(data) {
        const entity = this.repository.create(data);
        return await this.repository.save(entity);
    }
    async read(where) {
        return this.repository.find({ where });
    }
    async update(conditions, updateData) {
        const where = await this.getWhereConditions(conditions);
        const entities = await this.read(where);
        const updatedEntities = entities.map(entity => ({
            ...entity,
            ...updateData
        }));
        await this.repository.save(updatedEntities);
        return this.read(where);
    }
    async delete(conditions) {
        const where = await this.getWhereConditions(conditions);
        await this.repository.delete(where);
    }
}
