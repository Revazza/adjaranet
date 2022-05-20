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
  }, [props.data,movies]);

  useEffect(() => {
    setCarouselStyle(
      `translateX(${-ref.current.clientWidth * props.counter}px)`
    );
  }, [props.counter]);

  return (
    <div className={classes.carousel_slide}>
      <div className={classes.img_wrapper} ref={ref} style={{transform:carouselStyle}}>
        {movies !== null &&
          movies.map((movie,index) => {
            return (
              <React.Fragment key={movie.id}>
                <img
                  style={movie.style}
                  src={movie.src}
                  alt={`${movie.name}`}
                />
                <label
                  style={{
                    transform: `translateX(${
                      ref.current.clientWidth * index
                    }px)`,
                  }}
                >
                  {movie.name}
                </label>
              </React.Fragment>
            );
          })}
      </div>
    </div>
  );
}

export default SliderLayout;
