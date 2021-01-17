import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Classe} from 'src/app/shared/modal/classe';
import {Student} from 'src/app/shared/modal/student';
import {ClasseService} from 'src/app/shared/services/classe.service';

@Component({
    selector: 'app-screen1',
    templateUrl: './screen1.component.html',
    styleUrls: ['./screen1.component.scss']
})
export class Screen1Component implements OnInit {
    displayedColumns: string[] = ['Nom', 'Prenom', 'Email', 'Dispensed subject'];
    students: Student[] = [];
    classes: Classe[];
    dataSource: MatTableDataSource<Student>;


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private classeService: ClasseService) {
    }

    ngOnInit(): void {
        this.getClasses();
    }

    getClasses() {
        this.classeService.getAllClasses().subscribe(
            (data) => {
                this.classes = data;
                this.classes.forEach(
                    classe => {
                        this.students = this.students.concat(classe.students);
                    }
                )
                this.dataSource = new MatTableDataSource(this.students)
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
        )
    }

    filterClasse(classe: number) {
        this.students = [];
        this.classes.forEach(item => {
            if (item.id == classe) {
                this.students = item.students;
                this.dataSource = new MatTableDataSource(this.students)
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
        })
    }
}
