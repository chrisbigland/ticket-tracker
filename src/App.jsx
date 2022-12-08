import React, { useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import styles from "./App.module.scss";
import Employee from "./components/Employee";
import TicketTotal from "./components/TicketTotal";
import TopPerformers from "./components/TopPerformers";
import team from "./data/data";

const App = () => {

  const getEmployee = (employee) => (
    <Employee
      employee={employee}
      key={employee.id}
      handleAdd={handleAdd}
      handleMinus={handleMinus}
    />
  );

  let objectDate = new Date();
  let day = objectDate.getDate();
  let month = objectDate.getMonth();
  let year = objectDate.getFullYear();
  let todaysDate = `${day}/${month}/${year}`;

  const [employees, setEmployees] = useState(team); // sets employees state to the team array of objects

  const handleAdd = (employeeId) => {
    // handleAdd to be used in the Employee component when number is increased. The specific employeeID is passed through so we're dealing with right employee
    const newState = employees.map((element) => {
      // maps through employees state (team array of objects)
      if (element.id === employeeId) {
        // if the id of the item in the employees state (team array of objects) is the same as the one we are looking for, a score key is created in the object. This is set to 1 if it's not been created yet or increased if it's already been created
        if (element.score === undefined) {
          element.score = 1;
        } else {
          element.score++;
        }
      }
      return element;
    });

    setEmployees(newState); // here the employees state is reset to the above (i.e. new count inside of the object)
  };

  const handleMinus = (employeeId) => {
    // handleAdd to be used in the Employee component when number is increased. The specific employeeID is passed through so we're dealing with right employee
    const newState = employees.map((element) => {
      // maps through employees state (team array of objects)
      if (
        element.id === employeeId &&
        element.id != undefined &&
        element.score > 0
      ) {
        // if the id of the item in the employees state (team array of objects) is the same as the one we are looking for, a score key is created in the object. This is set to 1 if it's not been created yet or increased if it's already been created
        element.score--;
      }
      return element;
    });

    setEmployees(newState);
  };


  const sortedEmployees = [...employees].sort((a, b) => {
    return b.score - a.score;
  });


  const positionOne =
    sortedEmployees[0].score === 0 ? "" : sortedEmployees[0].name;
  const positionTwo =
    sortedEmployees[1].score === 0 ? "" : sortedEmployees[1].name;
  const positionThree =
    sortedEmployees[2].score === 0 ? "" : sortedEmployees[2].name;

  employees.map((employee) => {
    if (employee.score === undefined) {
      employee.score = 0;
    }
  });

  return (
    <React.Fragment>
      <h1 className={styles.heading}>Ticket Tracker</h1>
      <section className={styles.totalDateAndTopThree}>
      <div className={styles.dateAndTotal}>
      <TicketTotal employees={employees} />
        <h2 className={styles.date}>Today's Date: {todaysDate}</h2>
      </div>
      
      <TopPerformers positionOne={positionOne} positionTwo={positionTwo} positionThree={positionThree}/>
      </section>
      <section className={styles.content}>
        {team.map((person) => getEmployee(person))}
       
      </section>
    </React.Fragment>
  );
};

export default App;

// pass down totalTicketNo as props to totalTicketNo component? Do same with top 3 when working
// check these links for arrays in react https://javascript.plainenglish.io/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
//https://www.folkstalk.com/tech/how-to-define-array-in-react-js-with-code-examples/
// https://www.w3schools.com/react/react_es6_array_methods.asp

// ideas - access employee.count, store that as a state for each employee and put those into an array to work out top numbers
// store the employee name and their count as object items in an array.