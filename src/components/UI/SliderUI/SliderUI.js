import React, { useEffect, useState, useRef } from "react";
import MovieInformation from "./MovieInformation";

import styles from "./SliderUI.module.css";

function SliderUI(props) {
  const ref = useRef();

  const [data, setData] = useState([]);
  const [fetchIsDone, setFetchIsDone] = useState(false);
  const [count, setCount] = useState(0);
  const [carouselStyle, setCarouselStyle] = useState("");

  useEffect(() => {
    if (props.data !== null) {
      const arr1 = [...props.data].slice(0, 5);
      const arr2 = [...props.data].slice(5, 10);
      const arr3 = [...props.data].slice(10, 15);

      for (let i = 0; i < arr1.length; i++) {
        arr1[i] = { ...arr1[i], movieIndex: i };
        arr2[i] = { ...arr2[i], movieIndex: i };
        arr3[i] = { ...arr3[i], movieIndex: i };
      }

      const concatedArr = [[...arr1], [...arr2], [...arr3]];

      setFetchIsDone(true);

      setData(concatedArr);
    }
  }, [props.data]);

  const moveRightHandler = () => {
    if (count === 2) return;

    setCarouselStyle(`translateX(${-ref.current.clientWidth * (count + 1)}px)`);
    setCount((prevState) => ++prevState);
  };

  const moveLeftHandler = () => {
    if (count === 0) return;
    setCount((prevState) => --prevState);
    setCarouselStyle(`translateX(${-ref.current.clientWidth * (count - 1)}px)`);
  };

  return (
    <div className={styles.carousel_wrapper}>
      <section className={styles.section}>
        <p>{props.label}</p>
        <div className={styles.control}>
          <img
            id={styles.rotate}
            src="./assets/sliderPhotos/next.png"
            onClick={moveLeftHandler}
          />
          <img
            src="./assets/sliderPhotos/next.png"
            onClick={moveRightHandler}
          />
        </div>
      </section>
      <div className={styles.carousel}>
        <div
          className={styles.carousel_content}
          ref={ref}
          style={{ transform: carouselStyle }}
        >
          <div className={styles.sub_carousel}>
            {fetchIsDone &&
              data[0].map((movie) => {
                return (
                  <MovieInformation
                    movie={movie}
                    key={movie.id}
                  />
                );
              })}
          </div>
          <div className={styles.sub_carousel}>
            {fetchIsDone &&
              data[1].map((movie) => {
                return <MovieInformation movie={movie} key={movie.id} />;
              })}
          </div>
          <div className={styles.sub_carousel}>
            {fetchIsDone &&
              data[2].map((movie) => {
                return <MovieInformation movie={movie} key={movie.id} />;
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SliderUI;
