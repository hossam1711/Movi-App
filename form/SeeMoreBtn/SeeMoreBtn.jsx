import React from "react";
import "./SeeMoreBtn.css"; 

function SeeMoreButton({ loading, hasMore, onClick }) {
  return (
    <div className="see-more">
      {loading && <h3 className="loading">Loading...</h3>}
      {!loading && hasMore && (
        <button className="see-more-btn" onClick={onClick}>
          See More
        </button>
      )}
      {!hasMore && <h3 className="end">No more movies</h3>}
    </div>
  );
}

export default SeeMoreButton;
