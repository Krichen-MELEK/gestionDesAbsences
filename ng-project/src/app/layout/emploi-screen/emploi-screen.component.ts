import { Component, OnInit } from '@angular/core';
import {CalendarSchedulerEvent} from "angular-calendar-scheduler";
import {AppService} from "../../services/app.service";

@Component({
  selector: 'app-emploi-screen',
  templateUrl: './emploi-screen.component.html',
  styleUrls: ['./emploi-screen.component.scss']
})
export class EmploiScreenComponent implements OnInit {
  public events: CalendarSchedulerEvent[] = [];

  constructor(private appService: AppService) { }

  ngOnInit(): void {
      // this.appService.getEvents()
      //     .then((events: CalendarSchedulerEvent[]) => {
      //         this.events = events;
      //         console.log("this.events",this.events);
      //     });
      let event : CalendarSchedulerEvent = {
          id: '121',
          start:  new Date(2021,0,21,10,0),
          end: new Date(2021,0,21,11,0),
          title: 'Techno',
          content: 'Hafeth Kammoun',
          color: { primary: '#E0E0E0', secondary: '#EEEEEE' },
          actions: [],
          isClickable: true,
          isDisabled: false
      }
      this.events.push(event);

  }

}
