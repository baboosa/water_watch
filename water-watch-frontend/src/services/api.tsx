import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',
});

export interface Consumption {
  userId: number;
  amount: number;
  readingDate: string;
}

export interface HistoryItem {
  id: number;
  userId: number;
  amount: number;
  readingDate: string;
}

export interface Alert {
  alert: boolean;
  message: string;
}

export const registerConsumption = (data: Consumption) =>
  api.post('/consumptions', data);

export const getConsumptionHistory = (
  userId: number,
  startDate: string,
  endDate: string
) =>
  api.get<HistoryItem[]>(`/consumptions/history`, {
    params: { userId, startDate, endDate },
  });

export const getHighConsumptionAlert = (userId: number) =>
  api.get<Alert>(`/consumptions/alert`, { params: { userId } });

export default api;
