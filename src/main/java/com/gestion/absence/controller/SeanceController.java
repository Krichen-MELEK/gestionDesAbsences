package com.gestion.absence.controller;

import com.gestion.absence.entities.ResponseSeance;
import com.gestion.absence.services.SeanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/seance")
public class SeanceController {

    @Autowired
    SeanceService seanceService;

    @GetMapping("/all")
    public List<ResponseSeance> getAllSeance() {
        return seanceService.getAllSeance();
    }

}
