import { InfoOutlined, PlayArrow } from "@material-ui/icons";
import React, { useEffect, useState } from "react";
import { getRandomMovie } from "../../services/tmdb";
import "./featured.scss";

export default function Featured() {
  const [randomMovie, setRandomMovie] = useState(null);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      const movie = await getRandomMovie();
      console.log(movie);
      setRandomMovie(movie);
    };

    fetchRandomMovie();
  }, []);
  return (
    <div className="featured">
      {randomMovie && (
          <>
            <img
              src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`}
              alt="{randomMovie.title}"
            />
            <div className="info">
              <span className="desc">
                {randomMovie.overview}
              </span>
              <div className="buttons">
                <button className="play">
                  <PlayArrow />
                  <span>Play</span>
                </button>
                <button className="more">
                  <InfoOutlined />
                  <span>Info</span>
                </button>
              </div>
            </div>
        
          </>
       )}
       </div>
  );
}
