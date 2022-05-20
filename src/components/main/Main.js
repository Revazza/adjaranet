import React, { useEffect} from "react";
import FilmsInEnglish from "./content/filmsInEnglish/FilmsInEnglish";
import SearchBar from "./content/searchBar/SearchBar";

import classes from "./Main.module.css";
import Slider from "./slider/Slider";

import { moviesActions } from "../store";
import { useDispatch } from "react-redux";
import useFetch from "../hooks/useFetch";

function Main() {
  const { responseData } = useFetch(
    "https://adjaranet-suggested-movies-default-rtdb.firebaseio.com/movies.json"
  );
  const dispatch = useDispatch();

  useEffect(()=>{
    if(responseData!== null)
      dispatch(moviesActions.setMovies(responseData));
  },[responseData])

  return (
    <main>
      <Slider />
      <div className={classes.content}>
        <SearchBar />
        <FilmsInEnglish />
      </div>
    </main>
  );
}

export default Main;
