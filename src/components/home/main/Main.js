import React, { useEffect, useState} from "react";
import FilmsInEnglish from "./content/filmsInEnglish/FilmsInEnglish";
import SearchBar from "./content/searchBar/SearchBar";

import classes from "./Main.module.css";
import Slider from "./slider/Slider";

import { moviesActions } from "../../store/index";
import { useDispatch,useSelector } from "react-redux";
import useFetch from "../../hooks/useFetch";
import Serials from "./content/serials/Serials";
import PopularMovies from "./content/popularMovies/PopularMovies";
import Channels from "./content/channels/Channels";
import PremiereMovies from "./content/premiere/PremiereMovies";

function Main() {
  const { responseData } = useFetch(
    "https://adjaranet-suggested-movies-default-rtdb.firebaseio.com/movies.json"
  );
  const dispatch = useDispatch();

  const data = useSelector(state => state.movies.list);
  const [moviesList,setMoviesList] = useState([]); 

  useEffect( () =>{
    if(data !== undefined)
      setMoviesList(data);
  },[data])

  useEffect(()=>{
    if(responseData!== null)
      dispatch(moviesActions.setMovies(responseData));
  },[responseData])

  return (
    <main>
        <Slider />
        <div className={classes.content}>
          <SearchBar movies={moviesList} />
          <FilmsInEnglish movies={moviesList} />
          <Serials movies={moviesList} />
          <PopularMovies movies={moviesList} />
          <Channels />
          <PremiereMovies movies={moviesList} />
        </div>
    </main>
  );
}

export default Main;
