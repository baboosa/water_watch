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
exports.ConsumptionController = void 0;
const common_1 = require("@nestjs/common");
const consumption_service_1 = require("./consumption.service");
let ConsumptionController = class ConsumptionController {
    constructor(consumptionService) {
        this.consumptionService = consumptionService;
    }
    async createConsumption(createConsumptionDto) {
        const { userId, amount, readingDate } = createConsumptionDto;
        return this.consumptionService.createConsumption(userId, amount, readingDate);
    }
    async getConsumptionHistory(userId, startDate, endDate) {
        return this.consumptionService.getConsumptionHistory(userId, startDate, endDate);
    }
    async checkHighConsumptionAlert(userId) {
        return this.consumptionService.checkHighConsumptionAlert(userId);
    }
};
exports.ConsumptionController = ConsumptionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConsumptionController.prototype, "createConsumption", null);
__decorate([
    (0, common_1.Get)('history'),
    __param(0, (0, common_1.Query)('userId')),
    __param(1, (0, common_1.Query)('startDate')),
    __param(2, (0, common_1.Query)('endDate')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Date,
        Date]),
    __metadata("design:returntype", Promise)
], ConsumptionController.prototype, "getConsumptionHistory", null);
__decorate([
    (0, common_1.Get)('alert'),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConsumptionController.prototype, "checkHighConsumptionAlert", null);
exports.ConsumptionController = ConsumptionController = __decorate([
    (0, common_1.Controller)('consumptions'),
    __metadata("design:paramtypes", [consumption_service_1.ConsumptionService])
], ConsumptionController);
//# sourceMappingURL=consumption.controller.js.map