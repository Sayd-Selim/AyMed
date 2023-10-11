import React, { useState } from "react";
import { TextField, Button, Grid, Box } from "@mui/material";

const ServiceRequirements = () => {
  const [requirements, setRequirements] = useState([{ id: 0, text: "" }]);

  const addRequirement = () => {
    setRequirements([...requirements, { id: requirements.length, text: "" }]);
  };

  const handleInputChange = (id, value) => {
    const updatedRequirements = requirements.map((req) =>
      req.id === id ? { ...req, text: value } : req
    );
    setRequirements(updatedRequirements);
  };




  return (
    <div>
      <h2 className="text-2xl font-bold mb-5">Требования к оформлению:</h2>
      <Grid container spacing={2}>
        {requirements.map((req) => (
          <Grid item xs={9} key={req.id}>
            <TextField
              label="Требование"
              variant="outlined"
              fullWidth
              value={req.text}
              onChange={(e) => handleInputChange(req.id, e.target.value)}
            />
          </Grid>
        ))}
        <Grid item xs={4}>
          <Button color="primary" onClick={addRequirement}>
            + ещё
          </Button>
        </Grid>
      </Grid>
      <Box mt={4} textAlign="center">
        
      </Box>
    </div>
  );
};

export default ServiceRequirements;
