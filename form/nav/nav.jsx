import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { toggleLanguage } from "../redux/languageSlice";
import "./nav.css";

function Navbar() {
  const favoritesCount = useSelector((state) => state.favorites.favorites.length);
  const language = useSelector((state) => state.language.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    navigate("/login");
    setIsOpen(false); // يقفل المنيو بعد اللوج آوت
  };

  // يقفل المنيو لو المستخدم ضغط براها
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".navbar")) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  return (
    <nav className="navbar">
      <h2 className="logo">MovieSite</h2>

      {/* زر الهامبورجر */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* اللينكات */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/movies" className="nav-link" onClick={() => setIsOpen(false)}>
          {language === "en" ? "Movies" : "الأفلام"}
        </Link>

        <Link to="/favorites" className="nav-link" onClick={() => setIsOpen(false)}>
          {language === "en" ? `Favorites (${favoritesCount})` : `المفضلة (${favoritesCount})`}
        </Link>

        <button
          onClick={() => {
            dispatch(toggleLanguage());
            setIsOpen(false);
          }}
          className="translate-btn"
        >
          {language === "en" ? "العربية" : "English"}
        </button>

        <button onClick={handleLogout} className="logout-btn">
          {language === "en" ? "Logout" : "خروج"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
