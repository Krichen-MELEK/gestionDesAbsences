package com.gestion.absence.entities;

import javax.persistence.OneToMany;
import java.util.List;

public class Teacher extends User {
    @OneToMany
    private List<Subject> teachedSubjects;
}
