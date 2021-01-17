package com.gestion.absence.services;

import com.gestion.absence.entities.Classe;
import com.gestion.absence.entities.Seance;
import com.gestion.absence.repository.SeanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeanceService {
    @Autowired
    SeanceRepository seanceRepository;

}
