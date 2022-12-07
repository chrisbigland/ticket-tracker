import React, { useState, useEffect } from "react";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
import styles from "./Employee.module.scss";

const Employee = ({
  totalTicketNo,
  setTotalTicketNo,
  employee,
  index,
  allScores,
  setAllScores,
  handleAdd
}) => {
  console.log("setTotalTicketNo is", setTotalTicketNo);
  // const {name, role} = props.employee;
  const [count, setCount] = useState(0);
  const subtraction = count > 0 ? count - 1 : 0;
  const totalSubtraction = count > 0 ? totalTicketNo - 1 : totalTicketNo;
  //const allScoresTest = allScores.length === 1 ? allScores : ...allScores;

  // `${props.setTotalTicketNo(${props.totalTicketNo} + count)}`
 // const handlePlusClick = () => {
   // setCount(count + 1);
   // setTotalTicketNo((prev) => prev + 1); // previously this was totalTicketNo + 1. This just adds to the previous state
   // allScores[index] = count + 1; //DO SOMETHING HERE?
    // above sets the number of the array item to be the same as the number of the count (as it also does count + 1)
    // it does this by targetting the same index as is being looped through on the map.
  //  setAllScores([...allScores]);
   // console.log(allScores);
    // getFirstPlace();
  //};

  // when we click we:
  // set the count state
  // set the total ticket number state (this is shown on the browser)
  //set each array item in all scores

  //const handlePlusClick = () => {
  //   setCount(count + 1)
  //   setTotalTicketNo(totalTicketNo + 1)
  //   setAllScores([...allScores, (allScores[index] = count + 1)]);
  // }

  //   useEffect(() => {
  //     if (allScores.length === 1) {
  //    console.log('equals 1');
  // }
  //else {
  //  console.log('No threshold reached.');
  // }
  // }, [count]);
  // finding place in array that needs to be updated
  //copying array and updating item.

  const handleMinusClick = () => {
    setCount(subtraction);
    setTotalTicketNo(totalSubtraction)((allScores[index] = subtraction));
    setAllScores([...allScores]);
  };


  return (
    <React.Fragment>
      <div className={styles.employee}>
        <div className={styles.display}>
          <span>{employee.score}</span>
        </div>
        <div className={styles.plusMinus}>
          <span>
            <button className={styles.btn} onClick={() => handleMinusClick()}>
              -
            </button>
          </span>
          <span>
            <button className={styles.btn} onClick={() => handleAdd(employee.id)}>
              +
            </button>
          </span>

          <span>
            {/*  <button onClick={() => getEmployeeNumbers()}>work out ranking </button> */}
          </span>
        </div>

        <div className={styles.info}>
          <p className={styles.name}>Name: {employee.name}</p>
          <p className={styles.role}>Role: {employee.role}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Employee;
