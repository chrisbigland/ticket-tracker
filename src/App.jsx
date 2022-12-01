import React from 'react';
import './App.module.scss';
import styles from './App.module.scss'
import Employee from './components/Employee';

const App = () => {
  return (
  <React.Fragment>
    <h1 className={styles.heading}>Ticket Tracker</h1>
  <Employee />
  </React.Fragment>
  );
}

export default App;
