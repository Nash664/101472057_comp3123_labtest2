import React, { useState } from 'react';
import './SearchBar.css';

function SearchBar({ onSearch, loading }) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    performSearch();
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    performSearch();
  };

  const performSearch = () => {
    const trimmedValue = inputValue.trim();
    if (trimmedValue && !loading) {
      console.log('Searching for city:', trimmedValue);
      onSearch(trimmedValue);
      setInputValue('');
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        className="search-input"
        placeholder="Enter city name (e.g., Toronto, London, Tokyo)"
        value={inputValue}
        onChange={handleChange}
        disabled={loading}
      />
      <button 
        type="button" 
        className="search-button"
        onClick={handleButtonClick}
        disabled={loading || !inputValue.trim()}
      >
        {loading ? '⏳' : '🔍'}
      </button>
    </form>
  );
}

export default SearchBar;

