import { ConsumptionService } from './consumption.service';
export declare class ConsumptionController {
    private readonly consumptionService;
    constructor(consumptionService: ConsumptionService);
    createConsumption(createConsumptionDto: {
        userId: number;
        amount: number;
        readingDate: Date;
    }): Promise<import("./consumption.entity").Consumption>;
    getConsumptionHistory(userId: number, startDate: Date, endDate: Date): Promise<import("./consumption.entity").Consumption[]>;
    checkHighConsumptionAlert(userId: number): Promise<{
        alert: boolean;
        message: string;
    }>;
}
