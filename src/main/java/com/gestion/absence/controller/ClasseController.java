package com.gestion.absence.controller;

import com.gestion.absence.entities.Classe;
import com.gestion.absence.services.ClasseService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/classe")
public class ClasseController {
    @Autowired
    ClasseService classeService;

    @GetMapping("/all")
    public List<Classe> findAll() {
        return classeService.findAll();
    }

    @GetMapping("/id/{id}")
    public Classe findAll(@PathVariable("id") Long id) {
        return classeService.findById(id);
    }
}
