export interface Patient {
  id: string;
  chn: string;
  name: string;
  dateOfBirth: string;
  sex: 'M' | 'F';
  tomography: string;
}

