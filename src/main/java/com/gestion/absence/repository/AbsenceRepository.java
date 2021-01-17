package com.gestion.absence.repository;

import com.gestion.absence.entities.Absence;
import com.gestion.absence.entities.Seance;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AbsenceRepository extends JpaRepository<Absence, Long> {
    List<Absence> findBySeance(Seance seance);
}
