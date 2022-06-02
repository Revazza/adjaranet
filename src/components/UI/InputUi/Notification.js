import React from 'react';
import styles from './Notification.module.css';


function Notification(props) {

  const classes = `${styles.message} ${props.className}`;
  let ids;
  if(props.isError)
    ids = `${styles.error}`;
  
  return (
    <div className={classes} id={ids}>
        <p>{props.message}</p>
    </div>
  )
}

export default Notification;
