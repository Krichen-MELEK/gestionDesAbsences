import {NgModule, OnInit} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {StudentService} from 'src/app/shared/services/student.service';
import {Screen1Component} from './screen1.component';

const routes: Routes = [
    {
        path: '',
        component: Screen1Component
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class Screen1RoutingModule implements OnInit {
    students: any[]

    constructor(private studentService: StudentService) {
    }

    ngOnInit(): void {

        throw new Error('Method not implemented.');
    }

    getStudents() {
        this.studentService.getStudents().subscribe(
            data => {
                this.students = data
            }
        )
    }

}
