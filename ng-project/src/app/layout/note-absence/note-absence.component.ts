import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClasseService} from "../../shared/services/classe.service";
import {Classe} from "../../shared/modal/classe";

@Component({
  selector: 'app-note-absence',
  templateUrl: './note-absence.component.html',
  styleUrls: ['./note-absence.component.scss']
})
export class NoteAbsenceComponent implements OnInit {

  public classe : Classe;
  public idClasse: number;
  public idSeance: number;

  constructor(private router: ActivatedRoute, private classeService: ClasseService) {
  }

  ngOnInit(): void {
      this.idClasse = Number.parseInt(this.router.snapshot.paramMap.get("idclasse"));
      this.idSeance = Number.parseInt(this.router.snapshot.paramMap.get("idSeance"));

      this.classeService.getById(this.idClasse).subscribe(
          res => {
              this.classe = res;
              console.log(this.classe.students);
          }
      )
  }

}
