import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BackToMovies from "../BackToMovies/BackToMovies"; 
import MovieHeader from "../MovieHeader/MovieHeader";
import TopCast from "../TopCast/TopCast";
import "./MovieDetails.css";

function MovieDetails() {
  const { id } = useParams(); 
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const movieRes = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
          params: { api_key: "29cf44b93ca83bf48d9356395476f7ad" }
        });
        const castRes = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits`, {
          params: { api_key: "29cf44b93ca83bf48d9356395476f7ad" }
        });
        setMovie(movieRes.data);
        setCast(castRes.data.cast.slice(0, 6));
      } catch (err) {
        console.error("Error fetching movie details:", err);
      }
      setLoading(false);
    };
    fetchData();
  }, [id]);

  if (loading) return <h2 className="loading">Loading...</h2>;
  if (!movie) return <h2 className="loading">No movie found!</h2>;




  return (
    <div
      className="movie-details-container"
      style={{
        backgroundImage: movie.backdrop_path
          ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
          : movie.poster_path
          ? `url(https://image.tmdb.org/t/p/original${movie.poster_path})`
          : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <BackToMovies />
      <MovieHeader movie={movie} />
      <div className="movie-content">
        <div className="poster-section">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="details-poster"
          />
        </div>
        <div className="details-content">
          <p className="movie-overview">{movie.overview}</p>
          <div className="action-buttons">
            <button className="watch-trailer-btn">
              <span className="play-icon">▶</span> Watch trailer
            </button>
            <a
              href={`https://www.themoviedb.org/movie/${movie.id}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tmdb-btn"
            >
              View on TMDB
            </a>
          </div>
        
        </div>
      </div>
        <TopCast cast={cast} />
    </div>
  );
}

export default MovieDetails;
