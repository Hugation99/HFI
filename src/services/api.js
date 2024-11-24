export const mockPatients = [
    {
      id: 'CHN001',
      name: 'Jon Garcia',
      dob: '1985-05-15',
      sex: 'M',
      tomography: '/imagen_fibrosis_prueba.jpeg'
    },
    {
      id: 'CHN002',
      name: 'Queralt Casado',
      dob: '1990-08-20',
      sex: 'F',
      tomography: '/imagen_fibrosis_prueba.jpeg'
    }
  ];
  
  export const getMockReport = () => ({
    findings: [
      'Mass - Possible abnormal growth or tumor',
      'Infiltration - Suggestive of infection or inflammation',
      'Nodule - Abnormal growth requiring further evaluation'
    ],
    recommendation: 'Follow-up CT scan recommended as soon as possible.'
  });

  export const getMockImage = () => '/imagen_fibrosis_prueba_seg.png';