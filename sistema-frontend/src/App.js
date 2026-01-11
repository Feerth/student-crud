import React from 'react';
import EstudiantesList from './components/EstudiantesList';
import AgregarEstudiante from './components/AgregarEstudiante';
import EliminarEstudiante from './components/EliminarEstudiante';
import { Container, Typography, Box } from '@mui/material';
import './App.css'; // Asegúrate de que tienes el CSS de Material-UI

const App = () => {
  return (
    <Container maxWidth="lg" sx={{ paddingTop: 4 }}>
      <Typography variant="h3" align="center" gutterBottom>
        Sistema de Gestión de Estudiantes
      </Typography>

      <Box mb={4}>
        <Typography variant="h5">Lista de Estudiantes</Typography>
        <EstudiantesList />
      </Box>

      <Box mb={4}>
        <Typography variant="h5">Agregar Estudiante</Typography>
        <AgregarEstudiante />
      </Box>

      <Box mb={4}>
        <Typography variant="h5">Eliminar Estudiante</Typography>
        <EliminarEstudiante />
      </Box>
    </Container>
  );
};

export default App;
