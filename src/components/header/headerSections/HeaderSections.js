import React from 'react';

import classes from './HeaderSections.module.css';

function HeaderSections() {
  return (
    <nav>
      <div className={classes.section}>
        <img src="./assets/television.png" />
        <p>TV</p>
      </div>
      <div className={classes.section}>
        <img src="./assets/film.png" />
        <p>Films</p>
      </div>
      <div className={classes.section}>
        <img src="./assets/serial.png" />
        <p>Serials</p>
      </div>
      <div className={classes.section}>
        <img src="./assets/cinema.png" />
        <p>Cinemania</p>
      </div>
      <div className={classes.section}>
        <img src="./assets/baby.png" />
        <p>Child's</p>
      </div>
    </nav>
  );
}

export default HeaderSections;
