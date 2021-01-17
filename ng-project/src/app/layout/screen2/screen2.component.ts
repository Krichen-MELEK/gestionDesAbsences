import {Component, OnInit} from '@angular/core';
import {Teacher} from 'src/app/shared/modal/teacher';
import {TeacherService} from 'src/app/shared/services/teacher.service';

@Component({
    selector: 'app-screen2',
    templateUrl: './screen2.component.html',
    styleUrls: ['./screen2.component.scss']
})
export class Screen2Component implements OnInit {
    displayedColumns: string[] = ['Nom', 'Prenom', 'Email', 'Subjects'];
    teachers: Teacher[]

    constructor(private teacherService: TeacherService) {
    }

    ngOnInit() {
        this.getTeachers();
    }

    getTeachers() {
        this.teacherService.getTeachers().subscribe(
            (data) => {
                this.teachers = data;
            }
        )
    }
}
