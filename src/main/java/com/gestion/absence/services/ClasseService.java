package com.gestion.absence.services;

import com.gestion.absence.entities.Classe;
import com.gestion.absence.repository.ClasseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClasseService {
    @Autowired
    ClasseRepository classeRepository;

    public List<Classe> findAll() {
        return classeRepository.findAll();
    }

    public Classe findById(Long id) {
        return classeRepository.findById(id).get();
    }
}
