import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import '../pages/Decor.css'
const TimeRangePicer = () => {
  const [startTime, setStartTime] = useState(""); // Состояние для времени начала
  const [endTime, setEndTime] = useState(""); // Состояние для времени окончания

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value);
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value);
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-5">Интервал приема</h2>
      <div className="mb-20">
        <label className=" mr-5 ml-5">Начало приема:</label>
        <Button variant="contained"  >
          <TextField
            id="outlined-basic"
            variant="standard"
            type="time"
            value={startTime}
            onChange={handleStartTimeChange}
          />
        </Button>

        <label className=" mr-5 ml-10">Конец приема:</label>
        <Button variant="contained">
          <TextField
            id="outlined-basic"
            variant="standard"
            type="time"
            value={endTime}
            onChange={handleEndTimeChange}
          />
        </Button>
      </div>
    </>
  );
};

export default TimeRangePicer;
