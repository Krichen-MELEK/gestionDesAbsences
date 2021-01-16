import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class StudentService {

    constructor(private http: HttpClient,) {
    }

    getStudents(): Observable<any> {
        return this.http.get<any>("http://localhost:8080/student/all")
    }
}
