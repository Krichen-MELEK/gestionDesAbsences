package com.gestion.absence.entities;

import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.ManyToMany;
import java.util.List;

@Entity
@NoArgsConstructor
public class Teacher extends User {
    @ManyToMany
    private List<Subject> teacherSubjects;


    public Teacher(Long id, String nom, String prenom, String email, String password, List<Subject> teacherSubjects) {
        super(id, nom, prenom, email, password);
        setTeacherSubjects(teacherSubjects);
    }

    public List<Subject> getTeacherSubjects() {
        return teacherSubjects;
    }

    public void setTeacherSubjects(List<Subject> teacherSubjects) {
        this.teacherSubjects = teacherSubjects;
    }
}
