import React, { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";

import useFetch from "../../../hooks/useFetch";
import SearchResult from "./SearchResult";

function SearchBar() {
  const [movies, setMovies] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const { responseData, isLoading, error } = useFetch(
    "https://adjaranet-suggested-movies-default-rtdb.firebaseio.com/movies.json"
  );

  useEffect(() => {
    if (responseData !== null && movies === null) {
      setMovies(responseData);
    }
  }, [responseData]);

  const onSearchBarFocus = () => {
    setShowResult(true);
  };

  const onSearchBarLoseFocus = () => {
    setShowResult(false);
  };

  const searchInputHandler = (event) => {
    setSearchWord(event.target.value);
  };

  return (
    <div className={classes.wrapper}>
      <div className={classes.searchBar_wrapper}>
        <input
          type="search"
          placeholder="Search..."
          onFocus={onSearchBarFocus}
          onBlur={onSearchBarLoseFocus}
          onChange={searchInputHandler}
        />
        <img src="./assets/search.png" />
      </div>
      {showResult && <SearchResult movies={movies} searchWord={searchWord} />}
    </div>
  );
}

export default SearchBar;
