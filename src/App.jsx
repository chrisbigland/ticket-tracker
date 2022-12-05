import React, { useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import styles from "./App.module.scss";
import Employee from "./components/Employee";
import TicketTotal from "./components/TicketTotal";
import TopPerformers from "./components/TopPerformers";
import team from "./data/data";

const App = () => {
  const [totalTicketNo, setTotalTicketNo] = useState(0);
  const [numberOne, setNumberOne] = useState("");
  const [numberTwo, setNumberTwo] = useState("");
  const [numberThree, setNumberThree] = useState("");
  // first place to be name of someone calculated checking an array
  const [allScores, setAllScores] = useState([]);

  const getEmployee = (employee, index) => (
    <Employee
      employee={employee}
      key={employee.id}
      totalTicketNo={totalTicketNo}
      setTotalTicketNo={setTotalTicketNo}
      numberOne={numberOne}
      setNumberOne={setNumberOne}
      allScores={allScores}
      setAllScores={setAllScores}
      index={index}
    />
  );

  const allScoresCopy = [...allScores];
  // console.log(allScoresCopy)
  //{console.log(Math.max(allScoresCopy))};

  let max = allScoresCopy[0];

  for (let i = 0; i < allScoresCopy.length; i++) {
    if (allScoresCopy[i] > max) {
      max = allScoresCopy[i];
    }
  }
  const positionOne = allScoresCopy.indexOf(max);
  // console.log(allScoresCopy.indexOf(max))
  console.log(positionOne);
  //console.log(max.indexOf())

  // const sortedNumbers = allScoresCopy.sort((a, b) => {
  // return b - a;
  //    });
  //console.log(...sortedNumbers);

  // above - pass count back up like with totalTicketNo?
  return (
    <React.Fragment>
      <h1 className={styles.heading}>Ticket Tracker</h1>
      <div className={styles.ticketTotal}>
        <TicketTotal totalTicketNo={totalTicketNo} />
      </div>
      <div className={styles.dateAndTotal}>
        <h2 className={styles.date}>
          Today's Date: {`${new Date().toLocaleString()}`}
        </h2>
      </div>
      <div>
        <h2 className={styles.topThree}>Top 3 performers:</h2>

        <h2>1: {positionOne}</h2>
        <h2>2: {numberTwo}</h2>
        <h2>3: {numberThree}</h2>
      </div>
      <section className={styles.content}>
        {team.map((person, index) => getEmployee(person, index))}
        {/* <TopPerformers /> */}
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
