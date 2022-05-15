import React, { useState, useRef, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import LoadingUI from "../../UI/LoadingUI";

import classes from "./Slider.module.css";

function Slider() {
  const ref = useRef(null);
  const [counter, setCounter] = useState(1);
  const [carouselStyle, setCarouselStyle] = useState("");
  const [data, setData] = useState(null);

  const { responseData, error, isLoading } = useFetch(
    "https://adjaranet-suggested-movies-default-rtdb.firebaseio.com/suggestedMovies.json"
  );

  useEffect(() => {
    if (responseData !== null && data === null) {
      setData(responseData);
      console.log("io am");
    }
  }, [responseData]);

  useEffect(() => {
    setCarouselStyle(`translateX(${-ref.current.clientWidth * counter})`);
  }, [counter]);

  const prevBtnClickHandler = () => {
    setCounter((prevState) => --prevState);
  };

  const nextBtnClickHandler = () => {
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

      <div
        className={classes.carousel_slide}
        style={{ transform: carouselStyle }}
        ref={ref}
      >
        {data !== null &&
          data.map((movie) => {
            return (
              <div className={classes.img_wrapper} key={movie.id}>
                <img
                  style={movie.style}
                  src={movie.src}
                  alt={`${movie.name}`}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Slider;
