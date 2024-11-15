/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, Repository } from 'typeorm';
import { Consumption } from './consumption.entity';
import { User } from '../user/user.entity';

@Injectable()
export class ConsumptionService {
  constructor(
    @InjectRepository(Consumption)
    private consumptionRepository: Repository<Consumption>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) { }

  async createConsumption(
    userId: number,
    amount: number,
    readingDate: Date,
  ): Promise<Consumption> {
    const user = await this.userRepository.findOneBy({ id: userId });
    if (!user) throw new Error('Usuário não encontrado');

    const consumption = this.consumptionRepository.create({
      amount,
      readingDate,
      user,
    });
    return this.consumptionRepository.save(consumption);
  }

  async getConsumptionHistory(
    userId: number,
    startDate: Date,
    endDate: Date,
  ): Promise<Consumption[]> {
    return this.consumptionRepository.find({
      where: { user: { id: userId }, readingDate: Between(startDate, endDate) },
      order: { readingDate: 'ASC' },
    });
  }

  async checkHighConsumptionAlert(
    userId: number,
  ): Promise<{ alert: boolean; message: string }> {
    const consumptions = await this.consumptionRepository.find({
      where: { user: { id: userId } },
      order: { readingDate: 'DESC' },
      take: 2,
    });

    if (consumptions.length < 2) {
      return {
        alert: false,
        message: 'Não há consumo suficiente para comparação.',
      };
    }

    const [currentMonth, lastMonth] = consumptions;
    if (currentMonth.amount > lastMonth.amount) {
      return {
        alert: true,
        message: 'Alerta: Consumo elevado em relação ao mês anterior.',
      };
    }

    return { alert: false, message: 'Consumo está dentro do esperado.' };
  }
}
