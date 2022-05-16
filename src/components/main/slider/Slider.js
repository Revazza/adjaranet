import React, { useState, useRef, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import LoadingUI from "../../UI/LoadingUI";

import classes from "./Slider.module.css";
import SliderLayout from "./SliderLayout";

function Slider() {
  const [counter, setCounter] = useState(0);
  const [data, setData] = useState(null);

  const { responseData, error, isLoading } = useFetch(
    "https://adjaranet-suggested-movies-default-rtdb.firebaseio.com/suggestedMovies.json"
  );


  useEffect(() => {
    if (responseData !== null && data === null) {
      setData(responseData);
    }
  }, [responseData]);

  const prevBtnClickHandler = () => {
    if(counter === 0)
      return;
    setCounter((prevState) => --prevState);
  };

  const nextBtnClickHandler = () => {
    if(counter + 1 === data.length)
      return;
    setCounter((prevState) => ++prevState);
  };

  return (
    <div className={classes.wrapper}>
      {isLoading && <LoadingUI />}
      <div
        className={classes.control}
        id={classes.prev}
        onClick={prevBtnClickHandler}
      >
        <img src="./assets/sliderPhotos/next.png" alt="Previus" />
      </div>
      <div
        className={classes.control}
        id={classes.next}
        onClick={nextBtnClickHandler}
      >
        <img src="./assets/sliderPhotos/next.png" alt="Next" />
      </div>

      <SliderLayout counter={counter} data ={data} />

    </div>
  );
}

export default Slider;
