import React, { useEffect, useState } from "react";
import SliderUI from "../../../UI/SliderUI/SliderUI";

import classes from "./FilmsInEnglish.module.css";

import { useSelector } from "react-redux";

function FilmsInEnglish(props) {

  const movies = useSelector(state => state.movies.list);

  const [allMovies,setAllMovies] = useState(null);

  useEffect( () =>{
    setAllMovies(movies);
  },[movies]);
  
  return (
    <div className={classes.wrapper}>
      <SliderUI data={allMovies} label='English Films' />
    </div>
  );
}

export default FilmsInEnglish;
