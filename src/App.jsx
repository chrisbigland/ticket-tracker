import React, { useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import styles from "./App.module.scss";
import Employee from "./components/Employee";
import TicketTotal from "./components/TicketTotal";
import TopPerformers from "./components/TopPerformers";
import team from "./data/data";

const App = () => {
  const [totalTicketNo, setTotalTicketNo] = useState(0);

  const [allScores, setAllScores] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);

  const getEmployee = (employee, index) => (
    <Employee
      employee={employee}
      key={employee.id}
      totalTicketNo={totalTicketNo}
      setTotalTicketNo={setTotalTicketNo}
      allScores={allScores}
      setAllScores={setAllScores}
      index={index}
      team={team}
    />
  );

  const allScoresCopy = [...allScores];

  let max = 0
  let maxScore = 0
  for (let i = 0; i < allScoresCopy.length; i++) {
    if (allScoresCopy[i] > maxScore) {  // if the value of the item is bigger than maxScore, max is set to the index of this item
      max = allScoresCopy.indexOf(allScoresCopy[i]);
      maxScore = allScoresCopy[i];
    }
  }
console.log("max is", max)
let secondLargestScore = 0;
  let secondLargest = 0;
  for (let i = 0; i < allScoresCopy.length; i++) {
    if (allScoresCopy.indexOf(allScoresCopy[i]) != max && allScoresCopy[i] > secondLargestScore) { // if the index of the item I'm looking at in this iteration is not the same as max (an index) and the value is bigger than the second Largest Score
      secondLargest = allScoresCopy.indexOf(allScoresCopy[i]); // we set secondLargest to the index of the item we're looking at
      secondLargestScore = allScoresCopy[i];
   }
  }

  //CONSIDER PUTTING IN ANOTHER IF CLAUSE HERE TO FIX TIE SCORE SITUATION - if it is equal to max.....
console.log("secondLargest is", secondLargest)
let thirdLargestScore = 0
  let thirdLargest = 0

  for (let i = 0; i < allScoresCopy.length; i++) {
    if (
      allScoresCopy.indexOf(allScoresCopy[i]) != max && allScoresCopy.indexOf(allScoresCopy[i]) != secondLargest && allScoresCopy[i] > thirdLargest) {
      thirdLargest = allScoresCopy.indexOf(allScoresCopy[i]);
      thirdLargestScore = allScoresCopy[i];
    }
  }

  const positionOneTernary = maxScore > 0 ? team[max]?.name : "";
  console.log("positionOneTernary is", positionOneTernary)
  console.log("team is", team)
  console.log("team max name is", team[max].name)
  console.log("maxScore is", maxScore)
  const positionTwoTernary = secondLargestScore > 0 ? team[secondLargest]?.name : "";
  console.log("positionTwoTernary is", positionTwoTernary)
  console.log("team secondLargest name is", team[secondLargest].name)
  console.log("secondLargestScore is", secondLargestScore)
  const positionThreeTernary =
    thirdLargestScore > 0 ? team[thirdLargest]?.name : "";

  let objectDate = new Date();

  let day = objectDate.getDate();

  let month = objectDate.getMonth();

  let year = objectDate.getFullYear();

  let todaysDate = `${day}/${month}/${year}`;

  return (
    <React.Fragment>
      <h1 className={styles.heading}>Ticket Tracker</h1>
      <div className={styles.ticketTotal}>
        <TicketTotal totalTicketNo={totalTicketNo} />
      </div>
      <div className={styles.dateAndTotal}>
        <h2 className={styles.date}>Today's Date: {todaysDate}</h2>
      </div>
      <div className={styles.topThree}>
        <h2 className={styles.topThreeTitle}>Top 3 performers:</h2>

        <h2 className={styles.pos1}>
          1: {positionOneTernary}
          {/* ? here shows that if it's not defined then ignore it*/}
        </h2>
        <h2 className={styles.pos2}>2: {positionTwoTernary}</h2>
        <h2 className={styles.pos3}>3: {positionThreeTernary}</h2>
      </div>
      <section className={styles.content}>
        {team.map((person, index) => getEmployee(person, index))}
      {/*  {team.map((employee) => getFirstPlace(employee))}*/ }
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

// to do: fix bug where top person is '0' if everything is '0' before them
// work out how to change the number to a name - using data?
// work out how to add second and third places
// work out how to shorten date to just date
// ask about drop-down menu - worth doing?
// filter out undefineds (this should fix issue of ranking order being wrong)
// THEN get to the root cause of why the undefineds were appearing at beginning of array.
// clear out console logs
// sort out ranking issue where if the second place has same score as first then first person in array is assigned second place
// improve variable names/amend similar ones
// remove the first place person appearing after the last tracker on the browser - I believe it's because of the map
