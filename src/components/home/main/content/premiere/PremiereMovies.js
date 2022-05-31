import React, { useState, useEffect } from "react";
import SliderUI from "../../../../UI/SliderUI/SliderUI";

import classes from "./PremiereMovies.module.css";

function PremiereMovies(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    if (movies.length === 0) {
      const filteredArr = props.movies.filter(
        (movie) => movie.premiere
      );

      setMovies(filteredArr);
    }
  }, [props.movies]);

  return (
    <div className={classes.wrapper}>
      <SliderUI data={movies} label="Premiere" />
    </div>
  );
}

export default PremiereMovies;
