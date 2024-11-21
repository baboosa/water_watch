import React, { useState } from 'react';
import styles from '../styles/Common.module.css';
import { registerConsumption } from '../services/api';

const ConsumptionForm: React.FC = () => {
  const [userId, setUserId] = useState<number | ''>('');
  const [amount, setAmount] = useState<number | ''>('');
  const [readingDate, setReadingDate] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (userId && amount && readingDate) {
      try {
        await registerConsumption({ userId, amount, readingDate });
        setMessage('Consumo registrado com sucesso!');
      } catch (error) {
        setMessage('Erro ao registrar consumo.');
      }
    } else {
      setMessage('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Cadastro de Consumo de Água</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>ID do Usuário:</label>
        <input
          type="number"
          className={styles.input}
          value={userId}
          onChange={(e) => setUserId(Number(e.target.value) || '')}
          required
        />

        <label className={styles.label}>Quantidade (m³):</label>
        <input
          type="number"
          className={styles.input}
          step="0.01"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value) || '')}
          required
        />

        <label className={styles.label}>Data do Consumo:</label>
        <input
          type="date"
          className={styles.input}
          value={readingDate}
          onChange={(e) => setReadingDate(e.target.value)}
          required
        />

        <button className={styles.button} type="submit">
          Registrar
        </button>
      </form>
      {message && <p className={message.includes('Erro') ? styles.alertNegative : styles.alertPositive}>{message}</p>}
    </div>
  );
};

export default ConsumptionForm;
