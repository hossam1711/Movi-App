import React from "react";
import "./MovieHeader.css";

function MovieHeader({ movie }) { 
  return (
    <div className="movie-header">
      <h1 className="movie-title">
        {movie.title} ({new Date(movie.release_date).getFullYear()})
      </h1>

      <div className="movie-meta">
        {/* Genres */}
        {movie.genres && movie.genres.map((genre) => (
          <span key={genre.id} className="capsule">{genre.name}</span>
        ))}

        {/* Runtime */}
        {movie.runtime && (
          <span className="capsule">{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m</span>
        )}

        {/* Original Language */}
        {movie.original_language && (
          <span className="capsule">{movie.original_language.toUpperCase()}</span>
        )}

        {/* Rating */}
        {movie.vote_average > 0 && (
          <span className="capsule">⭐ {movie.vote_average.toFixed(1)}</span>
        )}
      </div>
    </div>
  );
}

export default MovieHeader;
