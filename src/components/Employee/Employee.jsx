import React, { useState, useEffect } from "react";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
import styles from "./Employee.module.scss";

const Employee = ({
  totalTicketNo,
  setTotalTicketNo,
  employee,
  numberOne,
  setNumberOne,
  index,
  allScores,
  setAllScores,
}) => {
  // const {name, role} = props.employee;
  const [count, setCount] = useState(0);
  const subtraction = count > 0 ? count - 1 : 0;
  const totalSubtraction = count > 0 ? totalTicketNo - 1 : totalTicketNo;
  //const allScoresTest = allScores.length === 1 ? allScores : ...allScores;

  // `${props.setTotalTicketNo(${props.totalTicketNo} + count)}`
  const handlePlusClick = () => {
    setCount(count + 1);
    setTotalTicketNo(totalTicketNo + 1)
    ((allScores[index] = count + 1));
// above sets the number of the array item to be the same as the number of the count (as it also does count + 1)
// it does this by targetting the same index as is being looped through on the map. 
    setAllScores([...allScores]);
    console.log(allScores);
  };

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

  const calculateRanking = (count) => {
    //could I get each count to add to an array as they are being mapped and then apply logic to work out position in that array?
    const indivCount = count;
    return indivCount;
  };

  const employeeName = employee.name;
  console.log(employeeName);
  // let numbersArr = [{}]
  // create an array of objects here? with employee name and count?
  //const getEmployeeNumbers = (employeeName, count) => {
  // const employeeNameAndNumber = {
  // name: employeeName,
  //  number: count
  //  }
  //   console.log(employeeNameAndNumber)
  /// console.log(employee.name)
  //numbersArr.push(employee)
  //numbersArr.push(count)
  // return employeeNameAndNumber
  //  }
  console.log(count);

  return (
    <React.Fragment>
      <div className={styles.employee}>
        <div className={styles.display}>
          <span>{count}</span>
        </div>
        <div className={styles.plusMinus}>
          <span>
            <button className={styles.btn} onClick={() => handleMinusClick()}>
              -
            </button>
          </span>
          <span>
            <button className={styles.btn} onClick={() => handlePlusClick()}>
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
