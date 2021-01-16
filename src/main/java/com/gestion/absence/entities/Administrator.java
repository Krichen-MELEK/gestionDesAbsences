package com.gestion.absence.entities;

import lombok.NoArgsConstructor;

import javax.persistence.Entity;

@Entity
@NoArgsConstructor
public class Administrator extends User {

    public Administrator(Long id, String nom, String prenom, String email, String password) {
        super(id, nom, prenom, email, password);
    }
}
