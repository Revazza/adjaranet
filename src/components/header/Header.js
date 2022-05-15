import React from 'react';

import classes from './Header.module.css';
import HeaderSections from './headerSections/HeaderSections';

function Header() {
  return (
    <header>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
            <img src='./assets/logo.png' />
        </div>
        <HeaderSections />
        <div className={classes.sign_in}>
            <button type='button'>Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
