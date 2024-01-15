import "./listItem.scss";
import React, { useEffect, useState } from "react";
import { getMovie } from "../../services/tmdb";

export default function ListItem({index}) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      const movies = await getMovie();
      setMovies(movies);
    };

    fetchMovies();
  }, []);

  return (
    <>
      {movies &&
        movies.map((movie) => (
          <div key={movie.id} className="listItem">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
          </div>
        ))}
    </>
  );
}
