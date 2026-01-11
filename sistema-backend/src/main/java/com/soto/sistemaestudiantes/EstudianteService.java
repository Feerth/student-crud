package com.soto.sistemaestudiantes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EstudianteService {
    @Autowired
    private EstudianteRepository repo;

    public List<Estudiante> listar() {
        return repo.findAll();
    }

    public Estudiante guardar(Estudiante e) {
        return repo.save(e);
    }

    public void eliminar(Long id) {
        repo.deleteById(id);
    }
}
