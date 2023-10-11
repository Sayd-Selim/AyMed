import "./Decor.css";
import React, { useState, useRef } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Button from "@mui/material/Button";
import ServiceItem from "../components/ServiceItem";
import TimeRangePicker from "../components/TimeRangePicer";
import DoctorSchedule from "../components/DoctorTime";
import CabinetNumber from "../components/CabinetNumber";
import RequiredDocuments from "../components/RequiredDocuments";
import ServiceRequirements from "../components/ServiceRequirements";
import UserBD from "../components/UserBD";
import {CloudUpload} from '@mui/icons-material/';
import { TextField } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

const Decor = () => {
  const [startValue, setStartValue] = useState(10);
  const [endValue, setEndValue] = useState(45);
  const [selectedFile, setSelectedFile] = useState(null);
  const [state, setState] = useState([0, 1]);

  const [stateUserBD, setStateUserBD] = useState(true);
  // const [error, setError] = useState(false);
  // const [helperText, setHelperText] = useState("");
  const inputRef = useRef(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    setStateUserBD(false);
    window.scrollTo(0, window.scrollY - 2400);
    // inputRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const handleChange = ([start, end]) => {
    setStartValue(start);
    setEndValue(end);
  };

  return (
    <>
      <header className="header flex justify-around">
        <img src="Logo.png" alt="" width={150} />

        <div className="Text">
          <p>
            БРИФ для обязательного <br /> заполнения для нового или <br />{" "}
            приезжего врача <br /> в Семейную клинику "АйМед"
          </p>
        </div>
      </header>

      <section className="paperWork">
        <div className="container max-w-screen-md mx-auto">
          <h1></h1>

          <form action="" className="text-start py-5 ">
            <UserBD
              stateUserBD={stateUserBD}
              setStateUserBD={setStateUserBD}
              // error={error}
              // setError={setError}
              // helperText={helperText}
              // setHelperText={setHelperText}
              inputRef={inputRef}
            />

            <div className="flex items-center mb-10">
              <h2 className="text-xl mb-5 mr-5">
                Загрузите ваше резюме/анкету
              </h2>
              <div className="mb-4">
                <TextField
                  type="file"
                  accept=".pdf,.doc,.docx"
                  className="border p-2 rounded w-full"
                />
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">
              Возрастная группа приема
            </h2>
            <div className="flex items-center space-x-4 mb-20">
              <div className="flex flex-col items-center">
                <span>от</span>
                <Button variant="contained">{startValue}</Button>
              </div>
              <div className="flex flex-col items-center">
                <span>до</span>
                <Button variant="contained">{endValue}</Button>
              </div>
              <Slider
                range
                defaultValue={[startValue, endValue]}
                min={0}
                max={90}
                onChange={handleChange}
              />
            </div>

            <h2 className="text-2xl font-bold mb-4">Фото для СК "АйМед"</h2>
            <div className="flex items-center mb-10 photo-btn">
              <TextField
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />

              <Button
              
                component="label"
                variant="contained"
                startIcon={<CloudUpload />}
                disabled={!selectedFile}
                onClick={handleUpload}
              >
                Загрузить файл
                {/* <VisuallyHiddenInput type="file" /> */}
              </Button>
            </div>

            <div className="service-list mb-20">
              <h2 className="text-2xl font-bold mb-4">Оказываемые услуги</h2>

              {state.map((num, index) => (
                <ServiceItem
                  key={index} // Добавляем уникальный ключ
                  serviceDescription="Название услуги"
                  // servicePrice={20}
                />
              ))}
              <Button
                onClick={() => setState((prev) => [...prev, prev.length])}
              >
                + ещё
              </Button>
            </div>

            <TimeRangePicker />
            <DoctorSchedule />
            {/* <CabinetNumber /> */}
            <RequiredDocuments />
            <ServiceRequirements />
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              onClick={handleUpload}
              // disabled={error}
            >
              Отправить Данные
            </Button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Decor;
