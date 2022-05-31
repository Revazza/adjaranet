import React from 'react';
import classes from './Footer.module.css';

function Footer() {
  return (
    <footer>
      <div className={classes.wrapper}>
        <div className={classes.author}>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/sandro-revazishvili-b03637221/"
          >
            <h1>
              Created By <span>Sandro Revazishvili</span>
            </h1>
          </a>
        </div>
        <div className={classes.inspiration}>
          <a target="_blank" href="https://www.adjaranet.com/">
            <h1>
              Inspiration <span> Adjaranet </span>
            </h1>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
