package com.gestion.absence.entities;

import javax.persistence.Entity;
import javax.persistence.OneToMany;
import java.util.List;

@Entity
public class Student extends User {
    @OneToMany
    private List<Subject> dispensedSubjects;
}
