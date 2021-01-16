package com.gestion.absence.controller;

import com.gestion.absence.entities.Teacher;
import com.gestion.absence.services.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/teacher")
public class TeacherController {
    @Autowired
    TeacherService teacherService;

    @GetMapping("/all")
    public List<Teacher> findAll() {
        return teacherService.findAll();
    }
}
