import React, { useState } from 'react';
import styles from '../styles/Common.module.css';
import { getConsumptionHistory } from '../services/api';

const HistoryPage: React.FC = () => {
  const [userId, setUserId] = useState<number | ''>('');
  const [startDate, setStartDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  const [history, setHistory] = useState<any[]>([]);

  const fetchHistory = async () => {
    try {
      const data = await getConsumptionHistory(userId as number, startDate, endDate);
      setHistory(data.data);
    } catch (error) {
      console.error('Erro ao buscar histórico:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Histórico de Consumo</h2>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label className={styles.label}>ID do Usuário:</label>
        <input
          type="number"
          className={styles.input}
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value) || '')}
        />

        <label className={styles.label}>Data Inicial:</label>
        <input
          type="date"
          className={styles.input}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <label className={styles.label}>Data Final:</label>
        <input
          type="date"
          className={styles.input}
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />

        <button className={styles.button} onClick={fetchHistory}>
          Buscar Histórico
        </button>
      </form>

      <ul className={styles.list}>
        {history.map((item, index) => (
          <li key={index} className={styles.listItem}>
            {item.readingDate}: {item.amount} m³
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryPage;
