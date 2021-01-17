import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsenteismeComponent } from "./absenteisme/absenteisme.component";
import { EmploiScreenComponent } from "./emploi-screen/emploi-screen.component";
import { LayoutComponent } from './layout.component';
import { NoteAbsenceComponent } from "./note-absence/note-absence.component";
import { Screen1Component } from './screen1/screen1.component';
import { Screen2Component } from './screen2/screen2.component';


const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'student',
                component: Screen1Component
            },
            {
                path: 'teacher',
                component: Screen2Component
            },
            {
                path: 'emploi',
                component: EmploiScreenComponent
            },
            {
                path: 'Absenteisme',
                component: AbsenteismeComponent
            },
            {
                path: 'note/:idclasse/:idSeance',
                component: NoteAbsenceComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {
}
