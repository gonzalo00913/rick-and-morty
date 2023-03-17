import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";


function Nav({ onSearch }) {
  return (
    <div>
      <nav className="nav">
        <SearchBar onSearch={onSearch} />
        <Link to="/About">About</Link>
        <Link to="/Home">Home</Link>
        <Link to="/Favorite">favorite</Link>
      </nav>
    </div>
  );
}

export default Nav;
