import React from 'react';
import styles from './App.module.scss'
import Employee from './components/Employee';
import TicketTotal from './components/TicketTotal';
import TopPerformers from './components/TopPerformers';
import team from './data/data'

const App = () => {
  console.log(team)
  const getEmployee = (employee) => (
    <Employee employee={employee} key={employee.id}/>
  )
  return (
  <React.Fragment>
    <h1 className={styles.heading}>Ticket Tracker</h1>
  {/* <Employee employee={team[0]}/> */}
  {team.map(getEmployee)}
  {/* <TicketTotal />
  <TopPerformers /> */}
  </React.Fragment>
  );
}

export default App;
