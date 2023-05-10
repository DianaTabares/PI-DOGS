import React, { useState } from 'react';
import style from './SearchBar.module.css';


const SearchBar = ({onSearch}) => {
    const [name, setName] = useState('');

    const handleInputChange = e => {
        setName(e.target.value);
      };

      const handleSubmit = e => {
        e.preventDefault();
        onSearch(name);
    };

    return (
        <form onSubmit={handleSubmit}>
          <input type="text" value={name} onChange={handleInputChange} />
          <button className={style.styleButton} type="submit">Search</button>
        </form>
    );
};
export default SearchBar;