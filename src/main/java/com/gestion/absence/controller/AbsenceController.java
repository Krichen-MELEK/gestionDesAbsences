package com.gestion.absence.controller;

import com.gestion.absence.entities.Classe;
import com.gestion.absence.services.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/absense")
public class AbsenceController {

    @Autowired
    AbsenceService absenceService;

    @GetMapping("/value/{value}/{idStudent}/{idSeance}")
    public void findAll(@PathVariable("value") Long value,@PathVariable("idStudent") Long idStudent,@PathVariable("idSeance") Long idSeance) {
        absenceService.addAbsense(value,idStudent,idSeance);
    }
}
