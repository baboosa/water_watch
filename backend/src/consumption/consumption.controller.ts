/* eslint-disable prettier/prettier */
import { Controller, Post, Body, Query, Get } from '@nestjs/common';
import { ConsumptionService } from './consumption.service';

@Controller('consumptions')
export class ConsumptionController {
  constructor(private readonly consumptionService: ConsumptionService) { }
  @Post()
  async createConsumption(
    @Body()
    createConsumptionDto: {
      userId: number;
      amount: number;
      readingDate: Date;
    },
  ) {
    const { userId, amount, readingDate } = createConsumptionDto;
    return this.consumptionService.createConsumption(
      userId,
      amount,
      readingDate,
    );
  }
  @Get('history')
  async getConsumptionHistory(
    @Query('userId') userId: number,
    @Query('startDate') startDate: Date,
    @Query('endDate') endDate: Date,
  ) {
    return this.consumptionService.getConsumptionHistory(
      userId,
      startDate,
      endDate,
    );
  }
  @Get('alert')
  async checkHighConsumptionAlert(@Query('userId') userId: number) {
    return this.consumptionService.checkHighConsumptionAlert(userId);
  }
}

