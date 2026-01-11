package com.soto.sistemaestudiantes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/estudiantes")
@CrossOrigin(origins = "http://localhost:3000")
public class EstudianteController {

    @Autowired
    private EstudianteService service;

    @GetMapping
    public List<Estudiante> listar() {
        return service.listar();
    }

    @PostMapping
    public Estudiante guardar(@RequestBody Estudiante e) {
        return service.guardar(e);
    }

    @DeleteMapping("/{id}")
    public void eliminar(@PathVariable Long id) {
        service.eliminar(id);
    }
}
