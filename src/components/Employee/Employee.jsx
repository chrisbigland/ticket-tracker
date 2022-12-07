import React from "react";
import { scryRenderedDOMComponentsWithClass } from "react-dom/test-utils";
import styles from "./Employee.module.scss";

const Employee = ({
  employee,
  handleAdd, 
  handleMinus
}) => {


  const display = employee.score > 0 ? employee.score : 0;


  return (
    <React.Fragment>
      <div className={styles.employee}>
        <div className={styles.display}>
          <span>{display}</span>
        </div>
        <div className={styles.plusMinus}>
          <span>
            <button className={styles.btn} onClick={() => handleMinus(employee.id)}>
              -
            </button>
          </span>
          <span>
            <button className={styles.btn} onClick={() => handleAdd(employee.id)}>
              +
            </button>
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
