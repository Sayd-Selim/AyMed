import React, { useState } from "react";
import { TextField, Button, Grid } from "@mui/material";

const RequiredDocuments = () => {
  const [documents, setDocuments] = useState([{ id: 0, text: "" }]);

  const addDocument = () => {
    setDocuments([...documents, { id: documents.length, text: "" }]);
  };

  const handleInputChange = (id, value) => {
    const updatedDocuments = documents.map((doc) =>
      doc.id === id ? { ...doc, text: value } : doc
    );
    setDocuments(updatedDocuments);
  };

  return (
    <div className="mb-20">
      <h2 className="text-2xl font-bold mb-10">Необходимые документы:</h2>
      <Grid container spacing={2}>
        {documents.map((doc) => (
          <Grid item xs={9} key={doc.id}>
            <TextField
              label="Добавить документ"
              variant="outlined"
              fullWidth
              value={doc.text}
              onChange={(e) => handleInputChange(doc.id, e.target.value)}
            />
          </Grid>
        ))}
        <Grid item xs={4}>
          <Button
            color="primary"
            onClick={addDocument}
          >
            + ещё
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default RequiredDocuments;
