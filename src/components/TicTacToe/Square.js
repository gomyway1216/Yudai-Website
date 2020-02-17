import React, { useState } from 'react'
import styles from './game.module.css'

const Square = props => {
  return (
    <button
      className={[
        styles.square,
        props.value === 'X' ? styles.cross : styles.circle,
        props.disabled ? styles.disabled : '',
      ].join(' ')}
      onClick={props.onClick}
    >
      {String(props.value).match(/^(X|O)$/) && props.value}
    </button>
  )
}

export default Square

// className={
//     styles.item && props.drinkCounter < 3
//       ? styles.drinkCountNormal
//       : styles.drinkCountExceed
//   }
