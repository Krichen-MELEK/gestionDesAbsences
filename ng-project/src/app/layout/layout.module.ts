import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { TranslateModule } from '@ngx-translate/core';
import { CalendarModule, DateAdapter } from "angular-calendar";
import { SchedulerModule } from "angular-calendar-scheduler";
import { adapterFactory } from "angular-calendar/date-adapters/date-fns";
import { MaterialModule } from '../shared/modules/material/material.module';
import { AbsenteismeComponent } from './absenteisme/absenteisme.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { EmploiScreenComponent } from './emploi-screen/emploi-screen.component';
import { EmploiComponent } from './emploi/emploi.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { NoteAbsenceComponent } from './note-absence/note-absence.component';
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        MaterialModule,
        TranslateModule,
        CalendarModule.forRoot({
            provide: DateAdapter,
            useFactory: adapterFactory,
        }),
        SchedulerModule.forRoot({ locale: 'en', headerDateFormat: 'daysRange' }),
        MatTableModule,
        MatSelectModule,
        MatChipsModule,
        MatRadioModule,
        MatButtonModule

    ],
    declarations: [
        Screen1Component,
        Screen2Component,
        LayoutComponent,
        NavComponent,
        TopnavComponent,
        SidebarComponent,
        EmploiComponent,
        AbsenteismeComponent,
        EmploiScreenComponent,
        NoteAbsenceComponent,
    ]

})
export class LayoutModule { }
