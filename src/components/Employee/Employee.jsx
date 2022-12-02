import React, { useState } from 'react'
import styles from './Employee.module.scss'

const Employee = (props) => {

    const {name, role} = props.employee;
    const [count, setCount] = useState(1);

  return (
    <React.Fragment>
    <div className={styles.employee}>
        <div className={styles.display}>
            <span>{count}</span>
        </div>
        <div className={styles.plusMinus}>
            <span>
                <button onClick={() => setCount(count - 1)}>-</button></span>
            <span>
                <button onClick={() => setCount(count + 1)}>+</button></span>
        </div>

        {/* <button onClick={() => setCount(count - 1)}>-</button></span> */}
        <div className={styles.info}>
            <p className={styles.name}>Name: {name}</p>
            <p className={styles.role}>Role: {role}</p>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Employee
