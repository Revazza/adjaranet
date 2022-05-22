import React, { useState, useEffect } from "react";
import useScrollPosition from '../hooks/useScrollPosition';

import classes from './Header.module.css';
import HeaderSections from './headerSections/HeaderSections';

function Header() {

  const scrollPosition = useScrollPosition();
  
  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
    if(scrollPosition >= 500)
    {
      setHeaderClass(`${classes.headerScrolled}`);
    }
    else{
      setHeaderClass('');
    }
  }, [scrollPosition])
  

  return (
    <header className={headerClass}>
      <div className={classes.wrapper}>
        <div className={classes.logo}>
          <img src="./assets/logo.png" />
        </div>
        <HeaderSections />
        <div className={classes.sign_in}>
          <button type="button">Login</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
