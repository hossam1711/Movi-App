import React from "react";
import { Link } from "react-router-dom";
import "./BackToMovies.css"; 

function BackToMovies() {
  return (
    <Link to="/movies" className="back-to-movies-btn">
      ⬅ Back to Movies
    </Link>
  );
}

export default BackToMovies;
