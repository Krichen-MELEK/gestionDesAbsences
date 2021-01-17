package com.gestion.absence.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ResponseSeance {
    private Long id;
    private Date dateDebut;
    private Date dateFin;
    private String room;
    private String subject;
    private int numberOfPresent;
    private int numberOfAbsence;
    private int numberOfRetard;
    private int numberOfAppelNonFaite;
}
