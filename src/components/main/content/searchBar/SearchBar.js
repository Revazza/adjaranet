import React, { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";

import SearchResult from "./SearchResult";
import { useSelector } from "react-redux";

function SearchBar(props) {
  const [movies, setMovies] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [searchWord, setSearchWord] = useState("");

  const data = useSelector( state => state.movies.list);

  useEffect( () => {
    if(data.length !== 0)
      setMovies(data);
  },[data])

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
