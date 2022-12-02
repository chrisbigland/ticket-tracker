import React, { useState } from 'react'
import styles from './Employee.module.scss'

const Employee = ({totalTicketNo, setTotalTicketNo, employee}) => {

    // const {name, role} = props.employee;
    const [count, setCount] = useState(0);
    const subtraction = count > 0 ? count - 1 : 0;

// `${props.setTotalTicketNo(${props.totalTicketNo} + count)}`
    const handlePlusClick = () => {
        setCount(count + 1)
        setTotalTicketNo(totalTicketNo + 1)
    }

  return (
    <React.Fragment>
    <div className={styles.employee}>
        <div className={styles.display}>
            <span>{count}</span>
        </div>
        <div className={styles.plusMinus}>
            <span>
                <button className={styles.btn} onClick={() => setCount(subtraction)}>-</button></span>
            <span>
                <button className={styles.btn} onClick={() => handlePlusClick()}>+</button></span>
        </div>

        <div className={styles.info}>
            <p className={styles.name}>Name: {employee.name}</p>
            <p className={styles.role}>Role: {employee.role}</p>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Employee
