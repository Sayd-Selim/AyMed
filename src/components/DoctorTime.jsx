import React, { useState } from 'react';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { Checkbox, FormControlLabel } from '@mui/material';

const DoctorSchedule = () => {
  const [schedule, setSchedule] = useState([
    { day: 'Понедельник', hours: '' },
    { day: 'Вторник', hours: '' },
    { day: 'Среда', hours: '' },
    { day: 'Четверг', hours: '' },
    { day: 'Пятница', hours: '' },
    { day: 'Суббота', hours: '' },
    // { day: 'Воскресенье', hours: '' },
  ]);

  // const handleInputChange = (index, event) => {
  //   const newSchedule = [...schedule];
  //   console.log('newSchedule',newSchedule);
  //   newSchedule[index].hours = event.target.value;
  //   setSchedule(newSchedule);
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь можно отправить данные о расписании на сервер
  };


  const handleCheckboxChange = (index, event) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index].selected = event.target.checked;
    setSchedule(updatedSchedule);
  };
  
  const handleInputChange = (index, event) => {
    const updatedSchedule = [...schedule];
    updatedSchedule[index].hours = event.target.value;
    setSchedule(updatedSchedule);
  };

  return (
    <form onSubmit={handleSubmit} className='mb-20'>
  <h2 className='text-2xl font-bold mb-5'>Дни приема</h2>
  <Grid container spacing={2}>
    {schedule.map((item, index) => (
      <Grid item xs={12} sm={7} key={index}>
        <FormControlLabel
          control={
            <Checkbox
              checked={item.selected}
              onChange={(e) => handleCheckboxChange(index, e)}
              color="primary"
            />
          }
          label={item.day}
        />
        
      </Grid>
    ))}
  </Grid>
</form>
  );
};

export default DoctorSchedule;
