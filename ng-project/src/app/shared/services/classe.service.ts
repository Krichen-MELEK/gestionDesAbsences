import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classe} from "../modal/classe";

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

  constructor(private http: HttpClient) { }

  getAllClasses(): Observable<Classe[]>{
      return this.http.get<Classe[]>("/api/classe/all");
  }
}
