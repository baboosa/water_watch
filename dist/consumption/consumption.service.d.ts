import { Repository } from 'typeorm';
import { Consumption } from './consumption.entity';
import { User } from '../user/user.entity';
export declare class ConsumptionService {
    private consumptionRepository;
    private userRepository;
    constructor(consumptionRepository: Repository<Consumption>, userRepository: Repository<User>);
    createConsumption(userId: number, amount: number, readingDate: Date): Promise<Consumption>;
    getConsumptionHistory(userId: number, startDate: Date, endDate: Date): Promise<Consumption[]>;
    checkHighConsumptionAlert(userId: number): Promise<{
        alert: boolean;
        message: string;
    }>;
}
