import React from 'react';

import classes from './Main.module.css';
import Slider from './slider/Slider';

function Main() {
  return (
    <main>
      <Slider />
      <div className={classes.content}>
        
      </div>
    </main>
  )
}

export default Main;
