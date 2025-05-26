import { AppDataSource } from '../data-source.ts';
import { HallsAssignment } from '../entity/halls-assignment.ts';
import {Employee} from "../entity/employee.ts";
import {TradingPointHall} from "../entity/trading-point-hall.ts";

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