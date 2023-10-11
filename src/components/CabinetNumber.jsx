import React, { useState } from 'react';
import { TextField } from '@mui/material';

const CabinetNumber = () => {
  const [cabinetNumber, setCabinetNumber] = useState('');

  const handleChange = (event) => {
    setCabinetNumber(event.target.value);
  };

  return (
    <div className='mb-20'>
    <h2 className='text-2xl font-bold mb-5'>№ Кабинета</h2>
    <TextField
      label="Номер кабинета"
      variant="outlined"
    //   fullWidth
      value={cabinetNumber}
      onChange={handleChange}
    />
    </div>
    
  );
};

export default CabinetNumber;
