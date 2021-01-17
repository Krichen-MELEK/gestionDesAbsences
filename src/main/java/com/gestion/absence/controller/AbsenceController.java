package com.gestion.absence.controller;

import com.gestion.absence.entities.Absence;
import com.gestion.absence.services.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/absence")
public class AbsenceController {

    @Autowired
    AbsenceService absenceService;

    @GetMapping("/value/{value}/{idStudent}/{idSeance}")
    public void addAbsence(@PathVariable("value") Long value, @PathVariable("idStudent") Long idStudent, @PathVariable("idSeance") Long idSeance) {
        absenceService.addAbsence(value, idStudent, idSeance);
    }

    @GetMapping("/all")
    public List<Absence> findAll() {
        return absenceService.findAll();
    }
}
