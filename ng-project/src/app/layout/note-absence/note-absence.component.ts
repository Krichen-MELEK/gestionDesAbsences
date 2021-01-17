import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ClasseService} from "../../shared/services/classe.service";
import {Classe} from "../../shared/modal/classe";
import {Student} from "../../shared/modal/student";

@Component({
  selector: 'app-note-absence',
  templateUrl: './note-absence.component.html',
  styleUrls: ['./note-absence.component.scss']
})
export class NoteAbsenceComponent implements OnInit {

  public classe : Classe;
  public students : Student[] = [];
  public absences : any[] = [];
  public idClasse: number;
  public idSeance: number;

  constructor(private router: ActivatedRoute, private classeService: ClasseService, private route: Router) {
  }

  ngOnInit(): void {
      this.idClasse = Number.parseInt(this.router.snapshot.paramMap.get("idclasse"));
      this.idSeance = Number.parseInt(this.router.snapshot.paramMap.get("idSeance"));

      this.classeService.getById(this.idClasse).subscribe(
          res => {
              this.classe = res;
              this.students = this.classe.students;
              this.students.forEach(student => {
                  this.absences.push({
                      studentId: student.id,
                      seanceId: this.idSeance,
                      value: ""
                  })
              })
          }
      )
  }

    radioChange(absenceValue,studentId){
      this.absences.forEach( absence => {
          if( absence.studentId == studentId) {
              absence.value = absenceValue;
          }
      })
    }

    valider(){
      console.log(this.absences);
      this.absences.forEach(absense => {
          this.classeService.addAbsense(absense.value,absense.studentId,absense.seanceId).subscribe(
              res => {
                  console.log("Done");
              }
          )
      });
      this.route.navigate(['/emploi']);
    }

}
