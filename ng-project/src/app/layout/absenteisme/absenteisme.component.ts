import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {Absence} from 'src/app/shared/modal/absence';
import {ResponseSeance} from 'src/app/shared/modal/response-seance';
import {Student} from 'src/app/shared/modal/student';
import {ClasseService} from 'src/app/shared/services/classe.service';

export interface PeriodicElement {
    name: string;
    position: number;
    weight: number;
    symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
    {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
    {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
    {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
    {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
    {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
    {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
    {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
    {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
    {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
    selector: 'app-absenteisme',
    templateUrl: './absenteisme.component.html',
    styleUrls: ['./absenteisme.component.scss']
})
export class AbsenteismeComponent implements OnInit {
    displayedColumns: string[] = ['subject', 'room', 'Date', 'dateDebut', 'dateFin', 'numberOfAbsence', 'numberOfPresent', 'numberOfRetard', 'numberOfAppelNonFaite'];
    students: Student[] = [];
    absences: Absence[];
    responseSeances: ResponseSeance[] = [];
    dataSource: MatTableDataSource<ResponseSeance>;


    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    constructor(private classeService: ClasseService) {
    }

    ngOnInit(): void {
        this.getAllSeances();
    }

    getAllSeances() {
        this.classeService.getAllSeance().subscribe(
            (data) => {
                this.responseSeances = data;
                // this.classes.forEach(
                //     classe => {
                //         this.students = this.students.concat(classe.students);
                //     }
                // )
                this.dataSource = new MatTableDataSource(this.responseSeances)
                this.dataSource.paginator = this.paginator;
                this.dataSource.sort = this.sort;
            }
        )
    }

    // filterClasse(classe: number) {
    //     this.students = [];
    //     this.classes.forEach(item => {
    //         if (item.id == classe) {
    //             this.students = item.students;
    //             this.dataSource = new MatTableDataSource(this.students)
    //             this.dataSource.paginator = this.paginator;
    //             this.dataSource.sort = this.sort;
    //         }
    //     })
    // }

}
