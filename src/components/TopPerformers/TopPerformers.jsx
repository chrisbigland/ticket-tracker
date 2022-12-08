import React from 'react'
import styles from './TopPerformers.module.scss'

const TopPerformers = ({positionOne, positionTwo, positionThree}) => {
  return (
    <React.Fragment>
          <div className={styles.topThree}>
          <h2 className={styles.topThreeTitle}>Top 3 performers:</h2>
  
          <h2 className={styles.pos1}>1: {positionOne}</h2>
          <h2 className={styles.pos2}>2: {positionTwo}</h2>
          <h2 className={styles.pos3}>3: {positionThree}</h2>
        </div>
        </React.Fragment>
  )
}

export default TopPerformers
