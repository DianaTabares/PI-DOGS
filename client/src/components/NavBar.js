import React from "react";
import SearchBar from './SearchBar';
import { Link } from "react-router-dom";

export default function NavBar({onSearch}) {
    return (
      <div className="nav">
        <Link to="/home">
          <button>Home</button>
        </Link>
        <SearchBar onSearch={onSearch} />
      </div>
    );
  }
  