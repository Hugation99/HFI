import React from 'react';

function SearchResults({ patients, onPatientSelect }) {
  return (
    <div className="search-results" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <h2>Search Results</h2>
      {patients.map(patient => (
        <div
          key={patient.id}
          onClick={() => onPatientSelect(patient)}
          style={{
            padding: '10px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>{patient.name}</span>
            <span>CHN: {patient.id}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;