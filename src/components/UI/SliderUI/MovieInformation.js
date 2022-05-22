import React, { useEffect, useState } from "react";
import CardUI from "../CardUI";

import styles from "./MovieInformation.module.css";

function MovieInformation(props) {
  const {
    id,
    src,
    alt,
    name,
    description,
    director,
    imbd,
    releaseDate,
    movieIndex,
    lan,
  } = props.movie;

  useEffect(() => {
    let languages = "";
    for (let language of lan) {
      if (language === "geo") languages += "g";
      else if (language === "eng") languages += "e";
      else languages += "r";
    }

    setAvailableLangs(languages);
  }, []);

  const [showInformation, setShowInformation] = useState(false);
  const [imageHoverID, setImageHoverID] = useState(``);
  const [availableLangs, setAvailableLangs] = useState("");

  let leftShow = ``;

  if (movieIndex > 1) leftShow = `${styles.leftShow}`;

  const mouseEnterHandler = () => {
    setShowInformation(true);
    setImageHoverID(`${styles.imageHovered}`);
  };

  const mouseLeaveHandler = () => {
    setShowInformation(false);
    setImageHoverID(``);
  };

  return (
    <div
      className={styles.content}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
    >
      <div id={id} className={styles.movie_wrapper}>
        <img
          src={src}
          alt={alt}
          id={imageHoverID}
          style={{ objectPosition: props.movie.objectPosition }}
        />
      </div>
      {showInformation && (
        <React.Fragment>
          <div className={styles.video_img}>
            <img src="./assets/play.png" />
          </div>
          <div className={styles.languages}>
            <div>
              <p
                className={
                  availableLangs.includes("e") ? "" : `${styles.inactive}`
                }
              >
                ENG
              </p>
            </div>
            <div id={styles.middleP}>
              <p
                className={
                  availableLangs.includes("g") ? "" : `${styles.inactive}`
                }
              >
                GEO
              </p>
            </div>
            <div>
              <p
                className={
                  availableLangs.includes("r") ? "" : `${styles.inactive}`
                }
              >
                RUS
              </p>
            </div>
          </div>
          <div className={styles.movie_information} id={leftShow}>
            <h4>{name}</h4>
            <hr></hr>
            <div className={styles.additional_information}>
              <p>
                <span id={styles.definitive}>Release Date: </span>
                {releaseDate}
              </p>
              <p>
                <span id={styles.definitive}>Director: </span>
                {director}
              </p>
            </div>
            <div className={styles.description}>
              <p id={styles.description_h}>Description</p>
              <p>{description}</p>
            </div>
            <div className={styles.accessories}>
              <CardUI className={styles.watch_later}>
                <img src="./assets/watchLater.png" />
                <p>Watch Later</p>
              </CardUI>
              <div className={styles.imbd}>
                <CardUI className={styles.border}>
                  <p>IMDb</p>
                </CardUI>
                <p>{imbd}</p>
              </div>
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}

export default MovieInformation;
