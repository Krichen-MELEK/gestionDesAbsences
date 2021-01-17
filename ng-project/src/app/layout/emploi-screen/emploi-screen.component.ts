import {Component, OnInit} from '@angular/core';
import {CalendarSchedulerEvent, CalendarSchedulerEventAction} from "angular-calendar-scheduler";
import {Classe} from "../../shared/modal/classe";
import {ClasseService} from "../../shared/services/classe.service";
import {NavigationExtras, Router} from "@angular/router";

@Component({
  selector: 'app-emploi-screen',
  templateUrl: './emploi-screen.component.html',
  styleUrls: ['./emploi-screen.component.scss']
})
export class EmploiScreenComponent implements OnInit {
  public events: CalendarSchedulerEvent[] = [];
  public classes: Classe[] = [];
  public selectedClasseId: number;
  constructor(private router: Router,private classeService: ClasseService) { }

    actions: CalendarSchedulerEventAction[] = [
        {
            when: 'enabled',
            label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">touch_app</i></span>',
            title: 'Delete',
            onClick: (event: CalendarSchedulerEvent): void => {
                this.router.navigate(['/note/'+this.selectedClasseId+"/"+event.id]);
            }
        },
        // {
        //     when: 'cancelled',
        //     label: '<span class="valign-center"><i class="material-icons md-18 md-red-500">autorenew</i></span>',
        //     title: 'Restore',
        //     onClick: (event: CalendarSchedulerEvent): void => {
        //         console.log('Pressed action \'Restore\' on event ' + event.id);
        //     }
        // }
    ];

  ngOnInit(): void {
      this.classeService.getAllClasses().subscribe(
          res => {
              this.classes = res;
          }
      );
  }

  changeClasse(classe: number){
      this.classes.forEach(item => {
          if(item.id == classe){
            item.seances.forEach(seance => {
                let event : CalendarSchedulerEvent = {
                    id: String(seance.id),
                    start:  new Date(seance.dateDebut),
                    end: new Date(seance.dateFin),
                    title: String(seance.subject.nom),
                    content: seance.room,
                    color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
                    actions: this.actions,
                    isClickable: true,
                    isDisabled: false
                }
                this.events.push(event);
            });
            this.selectedClasseId = item.id;
          }
      })
  }

}
