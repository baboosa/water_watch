import React, { useState } from 'react';
import styles from '../styles/Common.module.css';
import { getHighConsumptionAlert, Alert } from '../services/api';

const AlertPage: React.FC = () => {
  const [userId, setUserId] = useState<number | ''>('');
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const fetchAlerts = async () => {
    try {
      const data = await getHighConsumptionAlert(userId as number);
      setAlerts([data.data]);
    } catch (error) {
      console.error('Erro ao buscar alertas:', error);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Alertas de Consumo</h2>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <label className={styles.label}>ID do Usuário:</label>
        <input
          type="number"
          className={styles.input}
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value) || '')}
        />

        <button className={styles.button} onClick={fetchAlerts}>
          Verificar Alertas
        </button>
      </form>

      <ul className={styles.list}>
        {alerts.map((alert, index) => (
          <li key={index} className={alert.message.includes('aumento') ? styles.alertNegative : styles.alertPositive}>
            {alert.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlertPage;
