import React, { useEffect, useState, useCallback } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import MovieFilter from "../filter/Filter";
import SeeMoreButton from "../SeeMoreBtn/SeeMoreBtn";
import MovieCard from "../Card/Card";
import "./Movies.css";

function Movies() {
  const language = useSelector((state) => state.language.language);
  const [allMovies, setAllMovies] = useState([]);
  const [visibleCount, setVisibleCount] = useState(7);
  const [loading, setLoading] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [searchLetter, setSearchLetter] = useState("");
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [genres, setGenres] = useState([]);

  const API_KEY = "29cf44b93ca83bf48d9356395476f7ad";

  const fetchMovies = async (pageNum) => {
    setLoading(true);
    try {
      const res = await axios.get("https://api.themoviedb.org/3/movie/popular", {
        params: { api_key: API_KEY, page: pageNum, language: language },
      });
      if (res.data.results.length === 0) setHasMore(false);
      else setAllMovies((prev) => [...prev, ...res.data.results]);
    } catch (err) {
      console.error("Error fetching movies:", err);
    }
    setLoading(false);
  };

  const fetchGenres = async () => {
    try {
      const res = await axios.get("https://api.themoviedb.org/3/genre/movie/list", {
        params: { api_key: API_KEY, language: language },
      });
      setGenres(res.data.genres);
    } catch (err) {
      console.error("Error fetching genres:", err);
    }
  };

  // Infinite Scroll Handler
  const handleScroll = useCallback(() => {
    if (loading || !hasMore) return;
    
    if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
      if (visibleCount < allMovies.length) {
        setVisibleCount((prev) => prev + 7);
      } else if (hasMore) {
        setPage((prev) => prev + 1);
        setVisibleCount((prev) => prev + 7);
      }
    }
  }, [loading, hasMore, visibleCount, allMovies.length]);

  useEffect(() => {
    fetchMovies(page);
    fetchGenres();
  }, [page, language]);

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const visibleMovies = allMovies
    .slice(0, visibleCount)
    .filter((movie) => (selectedMonth ? movie.release_date?.split("-")[1] === selectedMonth : true))
    .filter((movie) =>
      searchLetter ? movie.title.toLowerCase().startsWith(searchLetter.toLowerCase()) : true
    );

  const handleSeeMore = () => {
    if (visibleCount < allMovies.length) setVisibleCount((prev) => prev + 7);
    else if (hasMore) {
      setPage((prev) => prev + 1);
      setVisibleCount((prev) => prev + 7);
    }
  };

  return (
    <div className="movies-container">
      <h2 className="movies-title">{language === "en" ? "Movies" : "الأفلام"}</h2>
      <MovieFilter
        selectedMonth={selectedMonth}
        setSelectedMonth={setSelectedMonth}
        searchLetter={searchLetter}
        setSearchLetter={setSearchLetter}
      />
      <div className="movies-grid">
        {visibleMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} genres={genres} />
        ))}
      </div>
      
      {/* Loading indicator */}
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>{language === "en" ? "Loading more movies..." : "جاري تحميل المزيد..."}</p>
        </div>
      )}
      
      {/* Keep the button as backup */}
      <SeeMoreButton loading={loading} hasMore={hasMore} onClick={handleSeeMore} />
    </div>
  );
}

export default Movies;