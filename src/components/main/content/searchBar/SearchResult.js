import React, { useEffect, useState } from "react";

import classes from "./SearchResult.module.css";
import CardUI from "../../../UI/CardUI";

function SearchResult(props) {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isInitial, setIsInitial] = useState(true);

  useEffect(() => {
    if (props.searchWord === "") {
      setIsInitial(true);
      setFilteredMovies([])
      return;
    }

    setIsInitial(false);

    const splittedSearchWord = props.searchWord.split(" ");
    if (props.movies !== null) {
      const filterMovies = props.movies.filter((movie) => {
        for (let i = 0; i < splittedSearchWord.length; i++) {
          const movieName = movie.name.toLowerCase();
          if (movieName.includes(splittedSearchWord[i])) return movie;
        }
      });
      setFilteredMovies(filterMovies);
    }
  }, [props.searchWord,props.movies]);

  const showMessage = isInitial ? (
    <p className={classes.message}>Find Your Beloved Movie</p>
  ) : (
    <p className={classes.message}>No Movies Found :(</p>
  );

  return (
    <div className={classes.result_wrapper}>
      {filteredMovies.length !== 0 &&
        filteredMovies.map((movie) => (
          <CardUI className={classes.result_information} key={movie.id}>
            <img src={movie.src} alt={movie.name} />
            <p>{movie.name}</p>
          </CardUI>
        ))}
      {filteredMovies.length === 0 && showMessage}
    </div>
  );
}

export default SearchResult;
