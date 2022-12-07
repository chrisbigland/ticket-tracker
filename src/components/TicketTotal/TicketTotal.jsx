import React from "react";
import styles from "./TicketTotal.module.scss";

const TicketTotal = (props) => {

  const scoresArr = props.employees.map((employee) => {
    return employee.score
  })
const sum = scoresArr.reduce((accumulator, value) => {
    return accumulator + value
  },0)
  return (
    <div>
      <h2>Completed Ticket Total:</h2>
      <p className={styles.number}>{sum}</p>
    </div>
  );
};

export default TicketTotal;
