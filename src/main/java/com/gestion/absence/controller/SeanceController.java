package com.gestion.absence.controller;

import com.gestion.absence.services.SeanceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/seance")
public class SeanceController {

    @Autowired
    SeanceService seanceService;

}
