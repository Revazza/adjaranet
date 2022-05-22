import React, { useState, useEffect } from "react";

import classes from "./Serials.module.css";
import SliderUI from "../../../UI/SliderUI/SliderUI";

function Serials(props) {
  const [movies,setMovies] = useState([]);

  useEffect(() => {
    if (movies.length === 0) {
      const filteredArr = props.movies.filter(
        (movie) => movie.type === "serial" && movie.lan.includes("eng")
      );
      filteredArr.reverse();
      setMovies(filteredArr);
    }
  }, [props.movies]);

  return (
    <div className={classes.wrapper}>
      <SliderUI data={movies} label="Serials In English" />
    </div>
  );
}

export default Serials;
