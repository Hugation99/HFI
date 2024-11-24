// src/App.js
import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import PatientInfo from './components/PatientInfo';
import SearchResults from './components/SearchResults';
import { mockPatients, getMockReport, getMockImage } from './services/api';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState(null);
  const [analysisReport, setAnalysisReport] = useState(null);
  const [processedImage, setMockimage] = useState(null)

  const filteredPatients = mockPatients.filter(patient =>
    patient.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleProcessImage = () => {
    setAnalysisReport(getMockReport());
    setMockimage(getMockImage())
  };

  return (
    <div className="App">
      <header className="App-header" style={{ minHeight: 'auto', padding: '20px' }}>
        <h1>Healthcare Federated Intelligence</h1>
      </header>
      
      <main style={{ padding: '20px' }}>
        <SearchBar 
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        {!selectedPatient ? (
          <SearchResults
            patients={filteredPatients}
            onPatientSelect={setSelectedPatient}
          />
        ) : (
          <PatientInfo
            patient={selectedPatient}
            onBack={() => setSelectedPatient(null)}
            onProcessImage={handleProcessImage}
            analysisReport={analysisReport}
            processedImage={processedImage}
          />
        )}
      </main>
    </div>
  );
}

export default App;