import React, { useState, useEffect, useRef } from "react";
import classes from "./SliderLayout.module.css";

function SliderLayout(props) {
  const ref = useRef();

  const [movies, setMovies] = useState(null);
  const [carouselStyle, setCarouselStyle] = useState(``);

  useEffect(() => {
    if (props.data !== null && movies === null) {
      setMovies(props.data);
    }
  }, [props.data]);

  useEffect(() => {
    setCarouselStyle(
      `translateX(${-ref.current.clientWidth * props.counter}px)`
    );
  }, [props.counter]);

  return (
    <div className={classes.carousel_slide}>
      <div className={classes.img_wrapper} ref={ref} style={{transform:carouselStyle}}>
        {movies !== null &&
          movies.map((movie) => {
            return (
                <img
                  key={movie.id}
                  style={movie.style}
                  src={movie.src}
                  alt={`${movie.name}`}
                />
            );
          })}
      </div>
    </div>
  );
}

export default SliderLayout;
