import React from "react";
import styles from "./TicketTotal.module.scss";

const TicketTotal = (props) => {
  return (
    <div>
      <h2 className={styles.dummy}>Completed Ticket Total:</h2>
      <p className={styles.number}>{props.totalTicketNo}</p>
    </div>
  );
};

export default TicketTotal;
