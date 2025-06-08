import { TradingPointHall } from '../entity/trading-point-hall.js';
import {DataSource} from "typeorm";
import {BaseService} from "../base-service.js";

export class TradingPointHallService extends BaseService<TradingPointHall> {
  constructor(dataSource: DataSource) {
    super(dataSource, TradingPointHall);
  }
}