import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MaterialModule } from '../shared/modules/material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopnavComponent } from './components/topnav/topnav.component';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { NavComponent } from './nav/nav.component';
import { Screen2Component } from './screen2/screen2.component';
import { EmploiComponent } from './emploi/emploi.component';
import {SchedulerModule} from "angular-calendar-scheduler";
import {CalendarModule, DateAdapter} from "angular-calendar";
import {adapterFactory} from "angular-calendar/date-adapters/date-fns";
import { AbsenteismeComponent } from './absenteisme/absenteisme.component';
import {MatTableModule} from '@angular/material/table';
import { EmploiScreenComponent } from './emploi-screen/emploi-screen.component';

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
        MatTableModule
    ],
    declarations: [
        Screen2Component,
        LayoutComponent,
        NavComponent,
        TopnavComponent,
        SidebarComponent,
        EmploiComponent,
        AbsenteismeComponent,
        EmploiScreenComponent
    ]

})
export class LayoutModule { }
