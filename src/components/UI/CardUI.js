import React from 'react';

import styles from './CardUI.module.css';

function CardUI(props) {

    const classes = `${styles.card} ${props.className}`;

  return (
    <div className={classes}>
        {props.children}
    </div>
  )
}

export default CardUI;
