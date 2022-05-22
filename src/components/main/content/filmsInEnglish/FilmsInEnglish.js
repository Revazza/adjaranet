import React, { useEffect, useState } from "react";
import SliderUI from "../../../UI/SliderUI/SliderUI";

import classes from "./FilmsInEnglish.module.css";

function FilmsInEnglish(props) {

  const [movies,setMovies] = useState([]);

  useEffect( () =>{
    if(movies.length === 0)
    {
      const filteredArr = props.movies.filter( movie => movie.type ==="movie");
      setMovies(filteredArr);
    }
  },[props.movies]);
  
  return (
    <div className={classes.wrapper}>
      <SliderUI data={movies} label='Movies In English' />
    </div>
  );
}

export default FilmsInEnglish;
