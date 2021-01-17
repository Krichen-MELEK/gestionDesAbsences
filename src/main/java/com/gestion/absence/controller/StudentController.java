package com.gestion.absence.controller;

import com.gestion.absence.entities.Student;
import com.gestion.absence.services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    StudentService studentService;

    @GetMapping("/all")
    public List<Student> findAll() {
        return studentService.findAll();
    }
}
