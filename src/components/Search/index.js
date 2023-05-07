import React from "react";
import search from "../../assets/search.png";
import "./search.scss";

function Search() {
  return (
    <div className="search">
      <img className="search-icon" alt="search-find" src={search} />
      <input className="search-input" type="text" placeholder="Search note" />
    </div>
  );
}

export default Search;
