package com.gestion.absence.services;

import com.gestion.absence.entities.Absence;
import com.gestion.absence.entities.Seance;
import com.gestion.absence.entities.Student;
import com.gestion.absence.repository.AbsenceRepository;
import com.gestion.absence.repository.SeanceRepository;
import com.gestion.absence.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AbsenceService {

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    SeanceRepository seanceRepository;
    @Autowired
    AbsenceRepository absenceRepository;


    public void addAbsense(Long value, Long idStudent, Long idSeance) {
        Student student = studentRepository.findById(idStudent).get();
        Seance seance = seanceRepository.findById(idSeance).get();
        Absence absence = new Absence();
        absence.setSeance(seance);
        absence.setStudent(student);
        if ("1".equals(value.toString())) {
            absence.setValeur("present");
        } else if ("2".equals(value.toString())) {
            absence.setValeur("absent");
        } else if ("3".equals(value.toString())) {
            absence.setValeur("retard");
        } else {
            absence.setValeur(" ");
        }
        absenceRepository.save(absence);

    }
}
