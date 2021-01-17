import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Student} from '../modal/student';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private http: HttpClient,) {
    }

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>("/api/student/all")
    }
}
