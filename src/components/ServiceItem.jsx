import React from "react";
import { TextField } from "@mui/material";
const ServiceItem = ({ serviceName, serviceDescription, servicePrice }) => {
  return (
    <div className="service-item flex ">
      {/* <h3>{serviceName}</h3> */}
      <TextField
        className="p-1.5 border flex-grow"
        type="text"
        margin="normal"
        label={serviceDescription}
        style={{ marginRight: "15px" }}
      />
      <TextField
        className="p-1.5 border flex-grow-0"
        type="text"
        margin="normal"
        label={`Стоимость: услуги`}
      />{" "}
    </div>
  );
};

export default ServiceItem;
