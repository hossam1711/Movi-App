import React from "react";
import { Link } from "react-router-dom";

function DetailsButton({ movieId }) {
  return (
    <Link 
      to={`/movie/${movieId}`} 
      style={{
        display: "inline-block",
        marginTop: "10px",
        padding: "8px 15px",
        background: "#e50914",
        color: "#fff",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "4px",
        textDecoration: "none",
        transition: "all 0.3s ease"
      }}
      onMouseOver={(e) => {
        e.target.style.background = "#f40612";
        e.target.style.transform = "scale(1.05)";
      }}
      onMouseOut={(e) => {
        e.target.style.background = "#e50914";
        e.target.style.transform = "scale(1)";
      }}
    >
      View Details
    </Link>
  );
}

export default DetailsButton;