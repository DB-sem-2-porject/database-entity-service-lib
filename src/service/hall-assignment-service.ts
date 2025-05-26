import { AppDataSource } from '../data-source.js';
import { HallsAssignment } from '../entity/halls-assignment.js';
import {Employee} from "../entity/employee.js";
import {TradingPointHall} from "../entity/trading-point-hall.js";

export class HallAssignmentService {
  private repository = AppDataSource.getRepository(HallsAssignment);
  
  async createAssignment(data: {
    employeeId: Employee,
    hallId: TradingPointHall
  }): Promise<HallsAssignment> {
    const assignment = this.repository.create(data);
    return this.repository.save(assignment);
  }
  
  async deleteAssignment(data: { id: number }): Promise<void> {
    await this.repository.delete(data.id);
  }
}