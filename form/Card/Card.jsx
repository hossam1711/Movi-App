// MovieCard.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToFavorites, removeFromFavorites } from "../redux/favoritesSlice";
import { useNavigate } from "react-router-dom";
import "./Card.css";

function MovieCard({ movie, genres }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const favorites = useSelector((state) => state.favorites.favorites);
  const isFavorite = favorites.some((fav) => fav.id === movie.id);

  const toggleFavorite = () => {
    if (isFavorite) dispatch(removeFromFavorites(movie.id));
    else dispatch(addToFavorites(movie));
  };

  const handleDetails = () => {
    navigate(`/movie/${movie.id}`);
  };

  const releaseDate = movie.release_date
    ? movie.release_date.split("-")
    : ["N/A", "N/A"];
  const year = releaseDate[0];
  const month = releaseDate[1];

  // 
  const movieGenres = (movie.genre_ids || [])
    .map((id) => genres.find((g) => g.id === id)?.name)
    .filter(Boolean);

  return (
    <div className="movie-card">
      <div className="poster-container">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="movie-poster"
        />
        <div className="rating-circle">{movie.vote_average?.toFixed(1)}</div>
        <div className="capsules">
          {movieGenres[0] && <span className="capsule">{movieGenres[0]}</span>}
          <span className="capsule">{`${month}/${year}`}</span>
        </div>

        <div className="overlay-info">
          <h3>{movie.title}</h3>
          {movie.overview && (
            <p>
              {movie.overview.length > 100
                ? movie.overview.slice(0, 100) + "..."
                : movie.overview}
            </p>
          )}

          <div className="overlay-actions">
            <button onClick={handleDetails} className="details-btn">
              Details
            </button>
            <button
              onClick={toggleFavorite}
              className={`favorite-btn ${isFavorite ? "filled" : "bordered"}`}
            >
              {isFavorite ? "❤️" : "🤍"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MovieCard;