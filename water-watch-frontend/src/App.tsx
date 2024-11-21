import React from 'react';
import styles from './styles/App.module.css';
import ConsumptionForm from './components/ConsumptionForm';
import HistoryPage from './components/HistoryPage';
import AlertPage from './components/AlertPage';

const App: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1>Monitoramento de Consumo de Água</h1>
      <ConsumptionForm />
      <hr />
      <HistoryPage />
      <hr />
      <AlertPage />
    </div>
  );
};

export default App;
