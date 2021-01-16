package com.gestion.absence.entities;

import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.List;

@Entity
@NoArgsConstructor
public class Student extends User {
    @ManyToMany
    private List<Subject> dispensedSubjects;

    public Student(Long id, String nom, String prenom, String email, String password, List<Subject> dispensedSubjects) {
        super(id, nom, prenom, email, password);
        this.setDispensedSubjects(dispensedSubjects);
    }

    public List<Subject> getDispensedSubjects() {
        return dispensedSubjects;
    }

    public void setDispensedSubjects(List<Subject> dispensedSubjects) {
        this.dispensedSubjects = dispensedSubjects;
    }
}
