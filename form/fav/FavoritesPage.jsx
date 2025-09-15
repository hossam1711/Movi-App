import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFavorites } from "../redux/favoritesSlice";
import "./fav.css";

function FavoritesPage() {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favorites.favorites);
  const language = useSelector((state) => state.language.language);

  return (
    <div className="favorites-container">
      <h2>{language === "en" ? "My Favorites" : "المفضلة"}</h2>
      {favorites.length === 0 ? (
        <p>{language === "en" ? "No favorites yet" : "لا توجد مفضلات"}</p>
      ) : (
        <div className="favorite-items-wrapper">
          {favorites.map((movie) => (
            <div key={movie.id} className="favorite-item">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="favorite-poster"
              />
              <div className="favorite-info">
                <h3>{movie.title}</h3>
              </div>
              <button
                onClick={() => dispatch(removeFromFavorites(movie.id))}
                className="remove-btn"
              >
                {language === "en" ? "Remove" : "إزالة"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default FavoritesPage;
