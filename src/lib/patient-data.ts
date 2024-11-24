import { Patient } from '../types/patient';

export const patients: Patient[] = [
  {
    id: '1',
    chn: 'CHN001',
    name: 'John Doe',
    dateOfBirth: '1985-05-15',
    sex: 'M',
    tomography: '/imagen_fibrosis_prueba.jpeg' //Updated lastTomography
  },
  {
    id: '2',
    chn: 'CHN002',
    name: 'Jane Smith',
    dateOfBirth: '1990-08-22',
    sex: 'F',
    tomography: '/imagen_fibrosis_prueba.jpeg' //Updated lastTomography
  }
];

export function searchPatients(chn: string): Patient[] {
  return patients.filter(patient => 
    patient.chn.toLowerCase().includes(chn.toLowerCase())
  );
}

