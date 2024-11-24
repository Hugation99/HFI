import React from 'react';

function PatientInfo({ patient, onBack, onProcessImage, analysisReport, processedImage }) {
  return (
    <div className="patient-info" style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <button
          onClick={onBack}
          style={{
            padding: '5px 10px',
            marginRight: '10px',
            border: 'none',
            background: 'none',
            cursor: 'pointer'
          }}
        >
          ← Back
        </button>
        <h2>Patient Information</h2>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div>
            <p style={{ color: '#666' }}>Name</p>
            <p>{patient.name}</p>
          </div>
          <div>
            <p style={{ color: '#666' }}>CHN</p>
            <p>{patient.id}</p>
          </div>
          <div>
            <p style={{ color: '#666' }}>Date of Birth</p>
            <p>{patient.dob}</p>
          </div>
          <div>
            <p style={{ color: '#666' }}>Sex</p>
            <p>{patient.sex}</p>
          </div>
        </div>
      </div>

      <div style={{ marginBottom: '20px' }}>
        <h3>Latest Tomography</h3>
        <div style={{ marginBottom: '10px' }}>
          <img
            src="/imagen_fibrosis_prueba.jpeg"
            alt="Tomography"
            style={{ width: '100%', borderRadius: '4px' }}
          />
        </div>
        <button
          onClick={onProcessImage}
          style={{
            padding: '8px 16px',
            backgroundColor: '#61dafb',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            cursor: 'pointer'
          }}
        >
                Process Image
        </button>
      </div>

      {analysisReport && (
        <div style={{ padding: '15px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
          <h3>Analysis Report</h3>
          <div>
            <h4>Findings:</h4>
            <ul style={{ paddingLeft: '20px' }}>
              {analysisReport.findings.map((finding, index) => (
                <li key={index}>{finding}</li>
              ))}
            </ul>
            <h4>Recommendation:</h4>
            <p>{analysisReport.recommendation}</p>
          </div>
        </div>
      )}

      {processedImage && (
        <div style={{ marginTop: '20px' }}>
          <h3>Detections</h3>
          <img
            src={processedImage}
            alt="Processed Image"
            style={{ width: '100%', borderRadius: '4px' }}
          />
        </div>
      )}
    </div>
  );
}

export default PatientInfo;