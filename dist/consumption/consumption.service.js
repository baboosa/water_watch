"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConsumptionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const consumption_entity_1 = require("./consumption.entity");
const user_entity_1 = require("../user/user.entity");
let ConsumptionService = class ConsumptionService {
    constructor(consumptionRepository, userRepository) {
        this.consumptionRepository = consumptionRepository;
        this.userRepository = userRepository;
    }
    async createConsumption(userId, amount, readingDate) {
        const user = await this.userRepository.findOneBy({ id: userId });
        if (!user)
            throw new Error('Usuário não encontrado');
        const consumption = this.consumptionRepository.create({
            amount,
            readingDate,
            user,
        });
        return this.consumptionRepository.save(consumption);
    }
    async getConsumptionHistory(userId, startDate, endDate) {
        return this.consumptionRepository.find({
            where: { user: { id: userId }, readingDate: (0, typeorm_2.Between)(startDate, endDate) },
            order: { readingDate: 'ASC' },
        });
    }
    async checkHighConsumptionAlert(userId) {
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
};
exports.ConsumptionService = ConsumptionService;
exports.ConsumptionService = ConsumptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(consumption_entity_1.Consumption)),
    __param(1, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], ConsumptionService);
//# sourceMappingURL=consumption.service.js.map