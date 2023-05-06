import React, { useState } from 'react';


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
          <button type="submit">Search</button>
        </form>
    );
};
export default SearchBar;