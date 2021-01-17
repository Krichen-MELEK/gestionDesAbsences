import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classe} from "../modal/classe";
import {Absence} from '../modal/absence';
import {ResponseSeance} from '../modal/response-seance';

@Injectable({
    providedIn: 'root'
})
export class ClasseService {

    constructor(private http: HttpClient) {
    }

    getAllClasses(): Observable<Classe[]> {
        return this.http.get<Classe[]>("/api/classe/all");
    }

    getById(id: number): Observable<Classe> {
        return this.http.get<Classe>("/api/classe/id/" + id);
    }

    addAbsense(value, studentId, seanceId) {
        return this.http.get("/api/absence/value/" + value + "/" + studentId + "/" + seanceId);
    }

    getAllAbsences(): Observable<Absence[]> {
        return this.http.get<Absence[]>("/api/absence/all");
    }

    getAllSeance(): Observable<ResponseSeance[]> {
        return this.http.get<ResponseSeance[]>("/api/seance/all");
    }
}
