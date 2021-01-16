package com.gestion.absence;

import com.gestion.absence.entities.Administrator;
import com.gestion.absence.entities.Classe;
import com.gestion.absence.entities.Seance;
import com.gestion.absence.entities.Student;
import com.gestion.absence.entities.Subject;
import com.gestion.absence.entities.Teacher;
import com.gestion.absence.repository.AdministratorRepository;
import com.gestion.absence.repository.ClasseRepository;
import com.gestion.absence.repository.SeanceRepository;
import com.gestion.absence.repository.StudentRepository;
import com.gestion.absence.repository.SubjectRepository;
import com.gestion.absence.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.GregorianCalendar;
import java.util.List;

@SpringBootApplication
public class AbsenceApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(AbsenceApplication.class, args);
        System.out.println("Hello World");
    }

    @Autowired
    StudentRepository studentRepository;
    @Autowired
    SubjectRepository subjectRepository;
    @Autowired
    ClasseRepository classeRepository;
    @Autowired
    TeacherRepository teacherRepository;
    @Autowired
    SeanceRepository seanceRepository;
    @Autowired
    AdministratorRepository administratorRepository;

    @Override
    public void run(String... args) throws Exception {
        initDataBase();
    }

    public void initDataBase() {
        // create subjects
        List<Subject> subjectList = new ArrayList<>();
        Subject subject = new Subject(null, "math");
        Subject subject1 = new Subject(null, "physique");
        Subject subject2 = new Subject(null, "anglais");
        Subject subject3 = new Subject(null, "science");
        Subject subject4 = new Subject(null, "poo");
        Subject subject5 = new Subject(null, "java");
        Subject subject6 = new Subject(null, "analyse de données");
        subjectList.add(subject);
        subjectList.add(subject1);
        subjectList.add(subject2);
        subjectList.add(subject3);
        subjectList.add(subject4);
        subjectList.add(subject5);
        subjectList.add(subject6);
        subjectRepository.saveAll(subjectList);

        // add students
        List<Student> students = new ArrayList<>();
        for (int i = 0; i < 40; i++) {
            List<Subject> subjects = new ArrayList<>();
            subjects.add(subjectList.get(i % 7));
            Student student = new Student(null, String.format("Krichen_%d", i), String.format("Melek_%d", i), String.format("melek_%d@mail.com", i), "123", subjects);
            students.add(studentRepository.save(student));
        }

        // create seances
        CreateSeances(subjectList, "room1");
        CreateSeances(subjectList, "room2");
        CreateSeances(subjectList, "room3");
        CreateSeances(subjectList, "room4");

        // create Teachers
        List<Teacher> teachers = new ArrayList<>();
        for (int i = 5; i < 10; i++) {
            List<Subject> teacherSubjects = new ArrayList<>();
            teacherSubjects.add(subjectList.get(i % 7));
            teacherSubjects.add(subjectList.get(1));
            Teacher teacher = new Teacher(null, String.format("Langar_%d", i), String.format("Mahjoub_%d", i), String.format("melek_%d@mail.com", i), "123", teacherSubjects);
            teachers.add(teacherRepository.save(teacher));
        }

        // create classes
        List<Classe> classes = new ArrayList<>();
        for (int i = 0; i < 4; i++) {
            List<Student> studentList = new ArrayList<>();
            for (int j = i * 10; j < (i * 10) + 10; j++) {
                studentList.add(students.get(j));
            }
            Classe classe = new Classe(null, String.format("classe_%d", i), studentList, seanceRepository.findByRoom(String.format("room%d", i + 1)), teachers);
            classes.add(classeRepository.save(classe));
        }


        // create admin
        Administrator administrator = new Administrator(null, "admin", "admin", "admin@gmail.com", "123");
        administratorRepository.save(administrator);
    }

    private void CreateSeances(List<Subject> subjectList, String room) {
        for (int i = 4; i < 31; i++) {
            if (i == 10 || i == 17 || i == 24) {
                i++;
            }
            Calendar calendar = new GregorianCalendar(2021, 1, i, 8, 0);
            Calendar calendar1 = new GregorianCalendar(2021, 1, i, 9, 0);
            Calendar calendar2 = new GregorianCalendar(2021, 1, i, 10, 0);
            Calendar calendar3 = new GregorianCalendar(2021, 1, i, 11, 0);
            Calendar calendar4 = new GregorianCalendar(2021, 1, i, 12, 0);
            Calendar calendar5 = new GregorianCalendar(2021, 1, i, 14, 0);
            Calendar calendar6 = new GregorianCalendar(2021, 1, i, 15, 0);
            Calendar calendar7 = new GregorianCalendar(2021, 1, i, 16, 0);
            Calendar calendar8 = new GregorianCalendar(2021, 1, i, 17, 0);
            Calendar calendar9 = new GregorianCalendar(2021, 1, i, 18, 0);

            Seance seance = new Seance(null, calendar.getTime(), calendar1.getTime(), room, subjectList.get(i % 7));
            Seance seance1 = new Seance(null, calendar1.getTime(), calendar2.getTime(), room, subjectList.get((i + 1) % 7));
            Seance seance2 = new Seance(null, calendar2.getTime(), calendar3.getTime(), room, subjectList.get((i + 2) % 7));
            Seance seance3 = new Seance(null, calendar3.getTime(), calendar4.getTime(), room, subjectList.get((i + 3) % 7));
            Seance seance4 = new Seance(null, calendar5.getTime(), calendar6.getTime(), room, subjectList.get((i + 4) % 7));
            Seance seance5 = new Seance(null, calendar6.getTime(), calendar7.getTime(), room, subjectList.get((i + 5) % 7));
            Seance seance6 = new Seance(null, calendar7.getTime(), calendar8.getTime(), room, subjectList.get((i + 6) % 7));
            Seance seance7 = new Seance(null, calendar8.getTime(), calendar9.getTime(), room, subjectList.get((i + 7) % 7));
            List<Seance> seances = new ArrayList<>();
            seances.add(seance);
            seances.add(seance1);
            seances.add(seance2);
            seances.add(seance3);
            seances.add(seance4);
            seances.add(seance5);
            seances.add(seance6);
            seances.add(seance7);
            seanceRepository.saveAll(seances);
        }
    }
}
