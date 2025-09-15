import React from "react";
import "./Filter.css"; 

function MovieFilter({ selectedMonth, setSelectedMonth, searchLetter, setSearchLetter }) {
  return (
    <div className="filter">
      <label>Month:</label>
      <select
        value={selectedMonth}
        onChange={(e) => setSelectedMonth(e.target.value)}
      >
        <option value="">All</option>
        {Array.from({ length: 12 }, (_, i) => {
          const month = String(i + 1).padStart(2, "0");// convert to 00 as month like api form 
          return (
            <option key={month} value={month}>
              {month}
            </option>
          );
        })}
      </select>

      <label style={{ marginLeft: "15px" }}>Search by First Letter:</label>
      <input
        type="text"
        maxLength={1}
        value={searchLetter}
        onChange={(e) => setSearchLetter(e.target.value)}
        placeholder="Enter a letter"
      />
    </div>
  );
}

export default MovieFilter;
