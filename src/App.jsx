import React, { useState } from "react";
import { isCompositeComponent } from "react-dom/test-utils";
import styles from "./App.module.scss";
import Employee from "./components/Employee";
import TicketTotal from "./components/TicketTotal";
import TopPerformers from "./components/TopPerformers";
import team from "./data/data";

const App = () => {
  const [totalTicketNo, setTotalTicketNo] = useState(0);
  // first place to be name of someone calculated checking an array
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
      getFirstPlace={getFirstPlace}
    />
  );

  const allScoresCopy = [...allScores];

  let max = allScoresCopy[0];
  // work out second highest by removing max from copy of array and then find max again?
  for (let i = 0; i < allScoresCopy.length; i++) {
    if (allScoresCopy[i] > max) {
      max = allScoresCopy[i];
    }
  }

  let secondLargest = allScoresCopy[0];
  for (let i = 0; i < allScoresCopy.length; i++) {
    if (allScoresCopy[i] != max && allScoresCopy[i] > secondLargest) {
      secondLargest = allScoresCopy[i];
    }
  }
  
  let thirdLargest = allScoresCopy[0];
  for (let i = 0; i < allScoresCopy.length; i++) {
    if (
      allScoresCopy[i] != max &&
      allScoresCopy[i] != secondLargest &&
      allScoresCopy[i] > thirdLargest
    ) {
      thirdLargest = allScoresCopy[i];
    }
  }


  console.log("allScoresCopy array is", allScoresCopy);

  // check whether allscores is set to something weird. If not, see if we can do a ternary or a ? somewhere to make sure it doesn't report as null

  const positionOne =
    allScoresCopy.length > 0 ? allScoresCopy.indexOf(max) : ""; // this is giving me the position in the array for the top scorer

  const positionTwo =
    allScoresCopy.length > 0 ? allScoresCopy.indexOf(secondLargest) : "";

  const positionThree =
    allScoresCopy.length > 0 ? allScoresCopy.indexOf(thirdLargest) : "";

  console.log("position one person is", team[positionOne]);
  let topPersonIs = "";
  let secondPersonIs = "";
  let thirdPersonIs = "";

  const getFirstPlace = (employee) => {
    console.log("function activated");

    if (employee.id === positionOne + 1) {
      console.log(`${employee.name} is in first place`);
      topPersonIs = employee.name;
      console.log(topPersonIs);
      return topPersonIs;
    } else if (employee.id === positionTwo + 1) {
      console.log(`${employee.name} is in second place`);
    } else if (employee.id === positionThree + 1) {
      console.log(`${employee.name} is in third place`);
    } else {
      console.log(`${employee.name} is not in the top three`);
    }
  };

  const [positionOneName, setPositionOneName] = useState(topPersonIs);

  console.log(positionOne);

  const positionOneTernary = max > 0 ? team[positionOne]?.name : "";
  const positionTwoTernary = secondLargest > 0 ? team[positionTwo]?.name : "";
  const positionThreeTernary = thirdLargest > 0 ? team[positionThree]?.name : "";
  

  let objectDate = new Date();

  let day = objectDate.getDate();
  console.log(day); // 23
  
  let month = objectDate.getMonth();
  console.log(month + 1); // 8
  
  let year = objectDate.getFullYear();
  console.log(year); // 2022

  let todaysDate = `${day}/${month}/${year}`
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
          Today's Date: {todaysDate}
        </h2>
      </div>
      <div className={styles.topThree}>
        <h2 className={styles.topThreeTitle}>Top 3 performers:</h2>

        <h2 className={styles.pos1}>
          1: {positionOneTernary} {/* ? here shows that if it's not defined then ignore it*/}
        </h2>
        <h2 className={styles.pos2}>2: {positionTwoTernary}</h2>
        <h2 className={styles.pos3}>3: {positionThreeTernary}</h2>
      </div>
      <section className={styles.content}>
        {team.map((person, index) => getEmployee(person, index))}
        {team.map((employee) => getFirstPlace(employee))}
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