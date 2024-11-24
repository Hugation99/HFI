import React from 'react';

function SearchBar({ searchTerm, onSearchChange }) {
  return (
    <div className="App-search">
      <input
        type="text"
        placeholder="Search by CHN..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        style={{
          width: '100%',
          maxWidth: '500px',
          padding: '8px',
          margin: '20px 0',
          borderRadius: '4px',
          border: '1px solid #ccc'
        }}
      />
    </div>
  );
}

export default SearchBar;
