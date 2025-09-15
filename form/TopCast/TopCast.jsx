import React from "react";
import "./TopCast.css";

function TopCast({ cast }) {
  return (
    <div className="top-cast">
      <h2>Top cast</h2>
      <div className="cast-grid">
        {cast.map((actor) => (
          <div key={actor.id} className="cast-card">
            <div className="actor-image">
              <img
                src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : "/placeholder-actor.jpg"}
                alt={actor.name}
              />
            </div>
            <div className="actor-info">
              <h4>{actor.name}</h4>
              <p>{actor.character}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopCast;
