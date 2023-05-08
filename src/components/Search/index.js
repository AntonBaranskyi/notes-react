import React from "react";
import search from "../../assets/search.png";
import "./search.scss";
import { useContext } from "react";
import { NotesContext } from "../../App";

function Search() {
  const { setSearch } = useContext(NotesContext);
  const [term, setTerm] = React.useState("");

  const updateSearch = (e) => {
    let state = e.target.value;
    setTerm(state);
    setSearch(state);
  };
  return (
    <div className="search">
      <img className="search-icon" alt="search-find" src={search} />
      <input
        value={term}
        onChange={updateSearch}
        className="search-input"
        type="text"
        placeholder="Search note"
      />
    </div>
  );
}

export default Search;
