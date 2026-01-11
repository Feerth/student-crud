import React, { useEffect, useState } from "react";
import axios from "axios";
import { List, ListItem, ListItemText, Box, Typography } from "@mui/material";

const EstudiantesList = () => {
  const [estudiantes, setEstudiantes] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/estudiantes")
      .then((response) => {
        setEstudiantes(response.data);
      })
      .catch((error) => {
        console.error("Hubo un error al obtener los estudiantes:", error);
      });
  }, []);

  return (
    <Box>
      {estudiantes.length > 0 ? (
        <List>
          {estudiantes.map((estudiante) => (
            <ListItem key={estudiante.id}>
              <ListItemText
                primary={`${estudiante.nombre} ${estudiante.apellido}`}
                secondary={`Carrera: ${estudiante.carrera} - Ciclo: ${estudiante.ciclo}`}
              />
            </ListItem>
          ))}
        </List>
      ) : (
        <Typography>No hay estudiantes registrados.</Typography>
      )}
    </Box>
  );
};

export default EstudiantesList;
