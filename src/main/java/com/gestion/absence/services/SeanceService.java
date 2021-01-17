package com.gestion.absence.services;

import com.gestion.absence.entities.Absence;
import com.gestion.absence.entities.ResponseSeance;
import com.gestion.absence.entities.Seance;
import com.gestion.absence.repository.SeanceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Service
public class SeanceService {
    @Autowired
    SeanceRepository seanceRepository;
    @Autowired
    AbsenceService absenceService;

    public List<ResponseSeance> getAllSeance() {
        List<Seance> seanceList = seanceRepository.findAll();
        List<ResponseSeance> responseSeances = new ArrayList<>();
        for (Seance seance : seanceList) {
            if (seance.getDateDebut().before(new Date())) {
                int nbPresences = 0;
                int nbAbsences = 0;
                int nbRetards = 0;
                int nbAppelNonFaite = 0;
                for (Absence absence : absenceService.findBySeance(seance)) {
                    switch (absence.getValeur()) {
                        case "absent":
                            nbPresences++;
                            break;
                        case "retard":
                            nbRetards++;
                            break;
                        case "present":
                            nbAbsences++;
                            break;
                        default:
                            nbAppelNonFaite++;
                    }
                }
                responseSeances.add(new ResponseSeance(seance.getId(), seance.getDateDebut(), seance.getDateFin(), seance.getRoom(), seance.getSubject().getNom(), nbPresences, nbAbsences, nbRetards, nbAppelNonFaite));
            }
        }
        return responseSeances;
    }

}
