import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const EliminarEstudiante = () => {
  const [id, setId] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();

    axios
      .delete(`http://localhost:8080/estudiantes/${id}`)
      .then((response) => {
        console.log('Estudiante eliminado:', response.data);
        setId('');
      })
      .catch((error) => {
        console.error('Hubo un error al eliminar el estudiante:', error);
      });
  };

  return (
    <form onSubmit={handleDelete}>
      <Box mb={2}>
        <TextField
          label="ID del Estudiante"
          variant="outlined"
          fullWidth
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </Box>
      <Button variant="contained" color="error" type="submit">
        Eliminar Estudiante
      </Button>
    </form>
  );
};

export default EliminarEstudiante;
