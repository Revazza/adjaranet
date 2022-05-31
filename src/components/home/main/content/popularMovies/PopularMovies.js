import React, { useEffect, useState } from 'react';
import SliderUI from '../../../../UI/SliderUI/SliderUI';
import classes from './PopularMovies.module.css';

function PopularMovies(props) {

  const [movies,setMovies] = useState([]);
  const [sectionMovies,setSectionMovies] = useState([]);
  const [section,setSection] = useState('day');
  const [sectionChange,setSectionChanged] = useState(false);


   useEffect(() =>{
    if(movies.length === 0 )
    {
      const filteredArr = props.movies.filter(movie => movie.popular===true);

      const tempSectionMovies = filteredArr.filter(movie => movie.top.includes('day'));

      setSectionMovies(tempSectionMovies);
      setMovies(filteredArr);
    }
  },[props.movies])

  const changeSectionHandler = (newSection) =>{
    setSection(newSection);
    const newSectionMovies = movies.filter((movie) =>
      movie.top.includes(newSection)
    );
    setSectionMovies(newSectionMovies);
    setSectionChanged(true);
    setTimeout(() =>{
      setSectionChanged(false);
    },100)
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.sections}>
        <button
          className={section === "day" ? classes.active : ''}
          onClick={() => changeSectionHandler("day")}
        >
          Day
        </button>
        <button
          className={section === "week" ? classes.active : ''}
          onClick={() => changeSectionHandler("week")}
        >
          Week
        </button>
        <button
          className={section === "month" ? classes.active : ''}
          onClick={() => changeSectionHandler("month")}
        >
          Month
        </button>
      </div>
      <SliderUI data={sectionMovies} label="Popular Movies" count={sectionChange && 0} />
    </div>
  );
}

export default PopularMovies;