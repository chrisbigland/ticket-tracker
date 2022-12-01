import React from 'react'
import styles from './Employee.module.scss'

const Employee = () => {
  return (
    <React.Fragment>
    <div className={styles.employee}>
        <div className={styles.display}>
            <span>0</span>
        </div>
        <div className={styles.plusMinus}>
            <span>
                <p>-</p></span>
            <span>
                <p>+</p></span>
        </div>
        <div className={styles.info}>
            <p className={styles.name}>Name:</p>
            <p className={styles.role}>Role:</p>
        </div>
    </div>
    </React.Fragment>
  )
}

export default Employee
