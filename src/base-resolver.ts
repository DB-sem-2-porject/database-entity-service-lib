import { Resolver, Query, Mutation, Arg, Int, ArgsType, Field, ObjectType } from 'type-graphql';
import {
    FindOptionsWhere,
    FindOptionsOrder,
    Like,
    MoreThan,
    MoreThanOrEqual,
    LessThan,
    LessThanOrEqual,
    In,
    Not
} from 'typeorm';
import { BaseService } from './base-service.js';

// Аргументы для пагинации
@ArgsType()
export class PaginationArgs {
    @Field(() => Int, { nullable: true, defaultValue: 0 })
    skip?: number;

    @Field(() => Int, { nullable: true, defaultValue: 10 })
    take?: number;
}

// Результат с пагинацией - generic тип
@ObjectType()
export class PaginatedResponse<T> {
    items?: T[];

    @Field(() => Int)
    totalCount?: number;

    @Field()
    hasNextPage?: boolean;

    @Field()
    hasPreviousPage?: boolean;
}

// Простые фильтры как JSON объект
export type FilterInput = {
    [key: string]: any;
    _like?: string; // для LIKE запросов
    _gt?: any; // больше
    _gte?: any; // больше или равно
    _lt?: any; // меньше
    _lte?: any; // меньше или равно
    _in?: any[]; // IN массив
    _null?: boolean; // IS NULL / IS NOT NULL
};

// Базовый резолвер - можно наследовать для любой сущности
export function createBaseResolver<T extends { id: number }>(
    suffix: string,
    entityClass: new () => T,
    serviceClass: new (...args: any[]) => BaseService<T>
) {
    @Resolver()
    abstract class BaseResolverHost {
        public service: BaseService<T>;

        protected constructor(dataSource: any) {
            this.service = new serviceClass(dataSource, entityClass);
        }

        // Преобразование простых фильтров в TypeORM условия
        public buildWhereCondition(filter: FilterInput = {}): FindOptionsWhere<T> {
            const where: any = {};

            Object.keys(filter).forEach(key => {
                const value = filter[key];

                if (key.startsWith('_')) {
                    // Игнорируем служебные ключи на верхнем уровне
                    return;
                }

                if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
                    // Обработка специальных операторов
                    if (value._like) {
                        where[key] = Like(`%${value._like}%`);
                    } else if (value._gt !== undefined) {
                        where[key] = MoreThan(value._gt);
                    } else if (value._gte !== undefined) {
                        where[key] = MoreThanOrEqual(value._gte);
                    } else if (value._lt !== undefined) {
                        where[key] = LessThan(value._lt);
                    } else if (value._lte !== undefined) {
                        where[key] = LessThanOrEqual(value._lte);
                    } else if (value._in !== undefined) {
                        where[key] = In(value._in);
                    } else if (value._null !== undefined) {
                        where[key] = value._null ? null : Not(null);
                    } else {
                        // Обычное равенство
                        where[key] = value;
                    }
                } else {
                    // Простое равенство
                    where[key] = value;
                }
            });

            return where;
        }

        // Общий метод для поиска
        @Query(() => [entityClass], { name: `find${suffix}` })
        async find(
            @Arg('filter', () => String, { nullable: true }) filter?: string,
            @Arg('orderBy', () => String, { nullable: true }) orderBy?: string,
            @Arg('skip', () => Int, { nullable: true }) skip?: number,
            @Arg('take', () => Int, { nullable: true }) take?: number,
            @Arg('relations', () => [String], { nullable: true }) relations?: string[]
        ): Promise<T[]> {
            const where = filter ? this.buildWhereCondition(JSON.parse(filter)) : {};
            const order = orderBy ? JSON.parse(orderBy) : {};

            return this.service.read({
                where,
                order,
                skip,
                take,
                relations
            });
        }

        // Поиск с пагинацией
        @Query(() => Object, { name: `find${suffix}WithPagination` }) // Object потому что не можем сделать generic ObjectType
        async findWithPagination(
            @Arg('filter', () => String, { nullable: true }) filter?: string,
            @Arg('orderBy', () => String, { nullable: true }) orderBy?: string,
            @Arg('skip', () => Int, { nullable: true, defaultValue: 0 }) skip: number = 0,
            @Arg('take', () => Int, { nullable: true, defaultValue: 10 }) take: number = 10,
            @Arg('relations', () => [String], { nullable: true }) relations?: string[]
        ): Promise<any> {
            const where = filter ? this.buildWhereCondition(JSON.parse(filter)) : {};
            const order = orderBy ? JSON.parse(orderBy) : {};

            const [items, totalCount] = await this.service.readWithCount({
                where,
                order,
                skip,
                take,
                relations
            });

            return {
                items,
                totalCount,
                hasNextPage: skip + take < totalCount,
                hasPreviousPage: skip > 0
            };
        }

        // Поиск одного элемента
        @Query(() => entityClass, { nullable: true, name: `find${suffix}One` })
        async findOne(
            @Arg('filter', () => String) filter: string,
            @Arg('relations', () => [String], { nullable: true }) relations?: string[]
        ): Promise<T | null> {
            const where = this.buildWhereCondition(JSON.parse(filter));
            return this.service.readOne({ where, relations });
        }

        // Получение по ID (простой случай)
        @Query(() => entityClass, { nullable: true, name: `get${suffix}ById` })
        async getById(@Arg('id', () => Int) id: number): Promise<T | null> {
            return this.service.readOne({ where: { id } as any });
        }
    }

    return BaseResolverHost;
}