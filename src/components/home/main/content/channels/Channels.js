import React,{useEffect, useRef} from "react";

import classes from './Channels.module.css';

function Channels() {

  const ref = useRef();
  
  useEffect(()=>{
    //Will be needed
    const y = ref.current.offsetTop;
  },[])

  return (
    <div className={classes.wrapper} ref={ref} >
      <p>Channels</p>
      <div className={classes.channels}>
        <div className={classes.channel}>
          <a target="_blank" href="#">
            <img src="./assets/channels/tv_pirveli.png" alt="TV pirveli" />
          </a>
        </div>
        <a
          target="_blank"
          href="https://mtavari.tv/"
          className={classes.channel}
        >
          <img src="./assets/channels/mtavari_arxi.png" alt="Mtavari Arxi" />
        </a>
        <a
          target="_blank"
          href="http://www.myvideo.ge/tv/gpbhd"
          className={classes.channel}
        >
          <img
            src="./assets/channels/pirveli_arxi_hd.png"
            alt="Pirveli Arxi HD"
          />
        </a>
        <a
          target="_blank"
          href="http://www.myvideo.ge/tv/gpb"
          className={classes.channel}
        >
          <img src="./assets/channels/pirveli_arxi.png" alt="Pirveli Arxi" />
        </a>
        <a
          target="_blank"
          href="https://www.imedi.ge/"
          className={classes.channel}
        >
          <img src="./assets/channels/imedi.png" alt="Imedi" />
        </a>
        <a
          target="_blank"
          href="http://www.myvideo.ge/tv/silk_sport4"
          className={classes.channel}
        >
          <img
            src="./assets/channels/silk_universal.png"
            alt="Silk Universal"
          />
        </a>
        <a
          target="_blank"
          href="https://1tv.ge/tv-radio/arkhebi/pirveli-arkhi-ganatleba/"
          className={classes.channel}
        >
          <img src="./assets/channels/teleskola.png" alt="Teleskola" />
        </a>
        <a
          target="_blank"
          href="https://postv.media/"
          className={classes.channel}
        >
          <img src="./assets/channels/postv.png" alt="PosTV" />
        </a>
        <a
          target="_blank"
          href="https://formula.ge/"
          className={classes.channel}
        >
          <img src="./assets/channels/formula.png" alt="Formula" />
        </a>
        <a
          target="_blank"
          href="https://www.euronews.com/"
          className={classes.channel}
        >
          <img src="./assets/channels/euro_news.png" alt="Euro News" />
        </a>
      </div>
    </div>
  );
}

export default Channels;
