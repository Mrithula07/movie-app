import React from "react";

const Search = ({ searchTerm, setSearchTerm, onSearch }) => {
  return (
    <div className="search">
      <div>
        <img src="./Search.svg" alt="search" />
        <input
          type="text"
          placeholder="Search through thousands of movies"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
    </div>
  );
};

export default Search;
