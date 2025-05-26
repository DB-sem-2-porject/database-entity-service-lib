var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Entity, PrimaryGeneratedColumn, Column, } from 'typeorm';
import 'reflect-metadata';
import { TradingPointType } from './enum/trading-point-type.js';
let TradingPoint = class TradingPoint {
    id;
    name;
    type;
    address;
    sizeSqm;
    rentCost;
    utilityCost;
    counterCount;
    floorsCount;
    openingDate;
    active;
    constructor(data) {
        if (data) {
            this.name = data.name;
            this.type = data.type;
            this.address = data.address;
            this.sizeSqm = data.sizeSqm;
            this.rentCost = data.rentCost;
            this.utilityCost = data.utilityCost;
            this.counterCount = data.counterCount;
            this.floorsCount = data.floorsCount ?? 1;
            this.openingDate = data.openingDate ?? new Date();
            this.active = data.active ?? true;
        }
    }
};
__decorate([
    PrimaryGeneratedColumn({ type: 'int', name: 'id' }),
    __metadata("design:type", Number)
], TradingPoint.prototype, "id", void 0);
__decorate([
    Column({ type: 'varchar', length: 100, unique: true }),
    __metadata("design:type", String)
], TradingPoint.prototype, "name", void 0);
__decorate([
    Column({
        type: 'enum',
        enum: TradingPointType,
    }),
    __metadata("design:type", String)
], TradingPoint.prototype, "type", void 0);
__decorate([
    Column({ type: 'text' }),
    __metadata("design:type", String)
], TradingPoint.prototype, "address", void 0);
__decorate([
    Column({
        name: 'size_sqm',
        type: 'numeric',
        precision: 10,
        scale: 2,
        nullable: true
    }),
    __metadata("design:type", Number)
], TradingPoint.prototype, "sizeSqm", void 0);
__decorate([
    Column({
        name: 'rent_cost',
        type: 'numeric',
        precision: 12,
        scale: 2,
        nullable: true
    }),
    __metadata("design:type", Number)
], TradingPoint.prototype, "rentCost", void 0);
__decorate([
    Column({
        name: 'utility_cost',
        type: 'numeric',
        precision: 12,
        scale: 2,
        nullable: true
    }),
    __metadata("design:type", Number)
], TradingPoint.prototype, "utilityCost", void 0);
__decorate([
    Column({
        name: 'counter_count',
        type: 'int',
        nullable: true
    }),
    __metadata("design:type", Number)
], TradingPoint.prototype, "counterCount", void 0);
__decorate([
    Column({
        name: 'floors_count',
        type: 'int',
        default: 1
    }),
    __metadata("design:type", Number)
], TradingPoint.prototype, "floorsCount", void 0);
__decorate([
    Column({
        name: 'opening_date',
        type: 'date',
        default: () => 'now()'
    }),
    __metadata("design:type", Date)
], TradingPoint.prototype, "openingDate", void 0);
__decorate([
    Column({
        type: 'boolean',
        default: true
    }),
    __metadata("design:type", Boolean)
], TradingPoint.prototype, "active", void 0);
TradingPoint = __decorate([
    Entity({ name: 'trading_points' }),
    __metadata("design:paramtypes", [Object])
], TradingPoint);
export { TradingPoint };
