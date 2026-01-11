import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import axios from 'axios';

const AgregarEstudiante = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [carrera, setCarrera] = useState('');
  const [ciclo, setCiclo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const estudiante = { nombre, apellido, carrera, ciclo };

    axios
      .post('http://localhost:8080/estudiantes', estudiante)
      .then((response) => {
        console.log('Estudiante agregado:', response.data);
        setNombre('');
        setApellido('');
        setCarrera('');
        setCiclo('');
      })
      .catch((error) => {
        console.error('Hubo un error al agregar el estudiante:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box mb={2}>
        <TextField
          label="Nombre"
          variant="outlined"
          fullWidth
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Apellido"
          variant="outlined"
          fullWidth
          value={apellido}
          onChange={(e) => setApellido(e.target.value)}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Carrera"
          variant="outlined"
          fullWidth
          value={carrera}
          onChange={(e) => setCarrera(e.target.value)}
        />
      </Box>
      <Box mb={2}>
        <TextField
          label="Ciclo"
          variant="outlined"
          fullWidth
          type="number"
          value={ciclo}
          onChange={(e) => setCiclo(e.target.value)}
        />
      </Box>
      <Button variant="contained" color="primary" type="submit">
        Agregar Estudiante
      </Button>
    </form>
  );
};

export default AgregarEstudiante;
