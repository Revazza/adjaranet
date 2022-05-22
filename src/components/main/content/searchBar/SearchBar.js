import React, { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";

import SearchResult from "./SearchResult";

function SearchBar(props) {
  const [movies, setMovies] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  useEffect( () => {
    if(props.movies.length !== 0)
      setMovies(props.movies);
  },[props.movies])

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
        <img src="./assets/search.png" alt="Search icon" />
      </div>
      {showResult && <SearchResult movies={movies} searchWord={searchWord} />}
    </div>
  );
}

export default SearchBar;
