import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Teacher} from '../modal/teacher';

@Injectable({
    providedIn: 'root'
})
export class TeacherService {

    constructor(private http: HttpClient) {
    }

    getTeachers(): Observable<Teacher[]> {
        return this.http.get<Teacher[]>("/api/teacher/all")
    }
}
