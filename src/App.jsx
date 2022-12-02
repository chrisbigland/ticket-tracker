import React, { useState } from 'react';
import styles from './App.module.scss'
import Employee from './components/Employee';
import TicketTotal from './components/TicketTotal';
import TopPerformers from './components/TopPerformers';
import team from './data/data'

const App = () => {
  const [totalTicketNo, setTotalTicketNo] = useState(0)

  
  const getEmployee = (employee) => (
    <Employee employee={employee} key={employee.id} totalTicketNo={totalTicketNo} setTotalTicketNo={setTotalTicketNo}/>
  )
  return (
  <React.Fragment>
    <h1 className={styles.heading}>Ticket Tracker</h1>
    
    <section className={styles.content}>
      {/* <Employee employee={team[0]}/> */}
      {team.map(getEmployee)} 
      {/* <TopPerformers /> */}
  </section>
  </React.Fragment>
  );
}

export default App;
