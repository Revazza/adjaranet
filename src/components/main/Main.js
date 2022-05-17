import React from 'react';
import SearchBar from './content/searchBar/SearchBar';

import classes from './Main.module.css';
import Slider from './slider/Slider';

function Main() {
  return (
    <main>
      <Slider />
      <div className={classes.content}>
        <SearchBar />
      </div>
    </main>
  )
}

export default Main;
