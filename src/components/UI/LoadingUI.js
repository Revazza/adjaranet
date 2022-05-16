import React from 'react';
import styles from './LoadingUI.module.css';

function LoadingUI(props) {

    const classes = `${styles.loader} ${props.className}`

  return (
    <div className={classes}></div>
  );
}

export default LoadingUI;
